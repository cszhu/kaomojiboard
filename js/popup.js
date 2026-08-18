'use strict';

// Category order for the pills and the section list. Must match KAOMOJI keys
// in js/kaomoji.js and the data-category values in popup.html.
var CATEGORIES = ['happy', 'funny', 'sad', 'angry', 'love', 'cute', 'animals'];

var RECENT_LIMIT = 10;       // total items shown in the "frequently used" strip
var RECENT_TAIL = 4;         // trailing slots reserved for the most-recent picks
var RECENT_ORDER_MAX = 15;   // how many recency entries we keep in storage

// Reserved storage keys (a kaomoji can never equal these), stored in sync
// alongside the numeric per-kaomoji counts.
var RECENT_ORDER_KEY = '__recentOrder__';
var FAV_KEY = '__favorites__';

var favorites = []; // loaded once at startup, kept in sync with storage

document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get([FAV_KEY], function (data) {
    favorites = (data && Array.isArray(data[FAV_KEY])) ? data[FAV_KEY] : [];

    buildSections();
    document.getElementById('all').addEventListener('click', onKaomojiClick);
    document.getElementById('fav-wrap').addEventListener('click', onKaomojiClick);
    document.getElementById('recent-wrap').addEventListener('click', onKaomojiClick);
    document.getElementById('filters').addEventListener('click', onPillClick);
    setupSettingsMenu();

    applyStoredFilters(function () {
      renderRecent();
      renderFavorites();
    });
  });
});

// ---- rendering -------------------------------------------------------------

function isFavorite(text) {
  return favorites.indexOf(text) !== -1;
}

function makeKaomoji(text) {
  var d = document.createElement('div');
  d.className = 'kaomoji' + (isFavorite(text) ? ' favorited' : '');
  d.setAttribute('data-k', text);
  d.appendChild(document.createTextNode(text));

  // A small heart in the corner: click to favorite (the cell copies otherwise).
  var heart = document.createElement('span');
  heart.className = 'fav-heart';
  heart.setAttribute('aria-hidden', 'true');
  d.appendChild(heart);

  return d;
}

function buildSections() {
  var all = document.getElementById('all');
  CATEGORIES.forEach(function (cat) {
    var list = (typeof KAOMOJI !== 'undefined' && KAOMOJI[cat]) ? KAOMOJI[cat] : [];

    var block = document.createElement('div');
    block.className = 'cat-block';
    block.setAttribute('data-category', cat);

    var label = document.createElement('div');
    label.className = 'cat-label';
    label.textContent = cat;
    block.appendChild(label);

    var section = document.createElement('div');
    section.className = 'section';
    list.forEach(function (k) { section.appendChild(makeKaomoji(k)); });
    block.appendChild(section);

    all.appendChild(block);
  });
}

// "Frequently used" = a blend: the most-recent few, then filled with the
// most-used-by-count, deduped, capped at RECENT_LIMIT.
function renderRecent() {
  chrome.storage.sync.get(null, function (items) {
    items = items || {};
    var order = Array.isArray(items[RECENT_ORDER_KEY]) ? items[RECENT_ORDER_KEY] : [];
    var freq = Object.keys(items)
      .filter(function (k) { return typeof items[k] === 'number'; })
      .sort(function (a, b) { return items[b] - items[a]; });

    var list = [];
    var seen = {};
    var i;
    var freqLead = RECENT_LIMIT - RECENT_TAIL; // most-used shown first
    // 1) lead with the most-used, reserving the last slots for recent picks
    for (i = 0; i < freq.length && list.length < freqLead; i++) {
      if (!seen[freq[i]]) { seen[freq[i]] = 1; list.push(freq[i]); }
    }
    // 2) then the most-recently-used that aren't already shown
    for (i = 0; i < order.length && list.length < RECENT_LIMIT; i++) {
      if (!seen[order[i]]) { seen[order[i]] = 1; list.push(order[i]); }
    }
    // 3) if recency was short, backfill with more of the most-used
    for (i = 0; i < freq.length && list.length < RECENT_LIMIT; i++) {
      if (!seen[freq[i]]) { seen[freq[i]] = 1; list.push(freq[i]); }
    }

    var recent = document.getElementById('recent');
    recent.textContent = '';
    list.forEach(function (k) { recent.appendChild(makeKaomoji(k)); });
    document.getElementById('recent-wrap').hidden = list.length === 0;
  });
}

function renderFavorites() {
  var fav = document.getElementById('favorites');
  fav.textContent = '';
  favorites.forEach(function (k) { fav.appendChild(makeKaomoji(k)); });
  document.getElementById('fav-wrap').hidden = favorites.length === 0;
}

// ---- clicking a kaomoji ----------------------------------------------------

function onKaomojiClick(e) {
  var cell = e.target.closest ? e.target.closest('.kaomoji') : null;
  if (!cell) return;
  var text = cell.getAttribute('data-k');

  if (e.target.closest('.fav-heart')) {
    toggleFavorite(text);
    return;
  }
  copyAndRecord(text);
}

function copyAndRecord(text) {
  navigator.clipboard.writeText(text).then(showCheck, function (err) {
    console.warn('kaomojiBoard: could not copy to clipboard -', err);
  });

  // Increment the count and move this kaomoji to the front of the recency list,
  // then re-render the frequently-used strip once saved.
  chrome.storage.sync.get([text, RECENT_ORDER_KEY], function (items) {
    var count = (items && typeof items[text] === 'number') ? items[text] : 0;
    var order = (items && Array.isArray(items[RECENT_ORDER_KEY])) ? items[RECENT_ORDER_KEY] : [];
    order = order.filter(function (k) { return k !== text; });
    order.unshift(text);
    if (order.length > RECENT_ORDER_MAX) order = order.slice(0, RECENT_ORDER_MAX);

    var rec = {};
    rec[text] = count + 1;
    rec[RECENT_ORDER_KEY] = order;
    chrome.storage.sync.set(rec, function () {
      if (chrome.runtime.lastError) {
        console.warn('kaomojiBoard: could not save recent -', chrome.runtime.lastError.message);
      }
      renderRecent();
    });
  });
}

function toggleFavorite(text) {
  var idx = favorites.indexOf(text);
  if (idx === -1) favorites.unshift(text); // newest favorite first
  else favorites.splice(idx, 1);

  var obj = {};
  obj[FAV_KEY] = favorites;
  chrome.storage.sync.set(obj, function () {
    if (chrome.runtime.lastError) {
      console.warn('kaomojiBoard: could not save favorites -', chrome.runtime.lastError.message);
    }
  });

  markFavorited(text, isFavorite(text));
  renderFavorites();
}

// Toggle the favorited class on every cell showing this kaomoji (it can appear
// in a category, in frequently-used, and in favorites at once).
function markFavorited(text, on) {
  var cells = document.getElementsByClassName('kaomoji');
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].getAttribute('data-k') === text) {
      cells[i].classList.toggle('favorited', on);
    }
  }
}

function showCheck() {
  var el = document.createElement('div');
  el.className = 'alert';
  el.textContent = '✓';
  el.addEventListener('animationend', function () { el.remove(); });
  document.body.appendChild(el);
}

// ---- filter pills ----------------------------------------------------------

function onPillClick(e) {
  var pill = e.target.closest ? e.target.closest('.pill') : null;
  if (!pill) return;
  var on = pill.getAttribute('aria-pressed') !== 'true';
  setPill(pill, on);
  applyFilter(pill.getAttribute('data-category'), on);
  saveFilters();
}

function setPill(pill, on) {
  pill.setAttribute('aria-pressed', on ? 'true' : 'false');
  pill.classList.toggle('active', on);
}

function applyFilter(cat, on) {
  var block = document.querySelector('.cat-block[data-category="' + cat + '"]');
  if (block) block.classList.toggle('hidden', !on);
}

function saveFilters() {
  var active = [];
  var pills = document.querySelectorAll('.pill');
  for (var i = 0; i < pills.length; i++) {
    if (pills[i].getAttribute('aria-pressed') === 'true') {
      active.push(pills[i].getAttribute('data-category'));
    }
  }
  chrome.storage.local.set({ activeCategories: active });
}

function applyStoredFilters(done) {
  chrome.storage.local.get('activeCategories', function (data) {
    var active = (data && Array.isArray(data.activeCategories)) ? data.activeCategories : null;
    if (active) { // no saved preference: leave all pills on (the default)
      var pills = document.querySelectorAll('.pill');
      for (var i = 0; i < pills.length; i++) {
        var cat = pills[i].getAttribute('data-category');
        var on = active.indexOf(cat) !== -1;
        setPill(pills[i], on);
        applyFilter(cat, on);
      }
    }
    if (done) done();
  });
}

// ---- settings menu (gear) --------------------------------------------------

function setupSettingsMenu() {
  var btn = document.getElementById('settings-btn');
  var menu = document.getElementById('settings-menu');

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    disarmAll();
  });

  menu.addEventListener('click', function (e) {
    e.stopPropagation();
    var item = e.target.closest ? e.target.closest('.menu-item') : null;
    if (!item) return;
    if (item.getAttribute('data-armed') === '1') {
      var action = item.getAttribute('data-action');
      if (action === 'reset-recent') doResetRecent();
      else if (action === 'reset-favorites') doResetFavorites();
      menu.hidden = true;
      disarmAll();
    } else {
      disarmAll();
      arm(item);
    }
  });

  // Any click outside closes the menu.
  document.addEventListener('click', function () {
    if (!menu.hidden) { menu.hidden = true; disarmAll(); }
  });
}

function arm(item) {
  item.setAttribute('data-armed', '1');
  item.setAttribute('data-label', item.textContent);
  item.textContent = 'Click again to confirm';
  item._disarmTimer = setTimeout(function () { disarm(item); }, 3000);
}

function disarm(item) {
  if (item.getAttribute('data-armed') === '1') {
    var label = item.getAttribute('data-label');
    if (label) item.textContent = label;
    item.removeAttribute('data-armed');
    if (item._disarmTimer) { clearTimeout(item._disarmTimer); item._disarmTimer = null; }
  }
}

function disarmAll() {
  var items = document.querySelectorAll('#settings-menu .menu-item');
  for (var i = 0; i < items.length; i++) disarm(items[i]);
}

function doResetRecent() {
  chrome.storage.sync.get(null, function (items) {
    items = items || {};
    var keys = Object.keys(items).filter(function (k) { return typeof items[k] === 'number'; });
    keys.push(RECENT_ORDER_KEY);
    chrome.storage.sync.remove(keys, function () { renderRecent(); });
  });
}

function doResetFavorites() {
  var was = favorites.slice();
  favorites = [];
  var obj = {};
  obj[FAV_KEY] = [];
  chrome.storage.sync.set(obj, function () {});
  was.forEach(function (k) { markFavorited(k, false); });
  renderFavorites();
}

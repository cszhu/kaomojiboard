# Chrome Web Store submission notes

Everything you need to paste into the Developer Dashboard, in the order the dashboard asks
for it. Nothing here needs to ship in the zip — this file is for you, not for Chrome.

---

## 0. Find the listing first

The extension was **never actually delisted**. It is still live:

- **Listing:** https://chromewebstore.google.com/detail/kaomojiboard/alkepecgcogdcjleihdddioilhadjlna
- **Item ID:** `alkepecgcogdcjleihdddioilhadjlna`
- **Publisher:** cszhu · 583 users · 4.7★ (18 ratings) · v1.0.3, last updated July 20 2017

What happened is Chrome's Manifest V2 deprecation: Chrome auto-disabled MV2 extensions in
users' browsers during 2024–2025 and dropped them out of store search, so it stopped working
and looked removed. The listing itself survived.

**This means you update in place** — same URL, same 583 users, same 4.7★ rating.

1. Go to https://chrome.google.com/webstore/devconsole
2. Sign in with the Google account behind the `cszhu` publisher name. If your current account
   doesn't show the item, try older/school/alt accounts from around 2017.
3. **2-Step Verification is mandatory** on developer accounts now — if it's off, the console
   will make you turn it on before you can do anything.
4. If the item shows a policy-violation or unpublished banner, read it before uploading.

If the account is truly unrecoverable, everything below still applies — you'd just create a
new item (one-time $5 developer fee, new URL, users and ratings reset to zero).

---

## 1. Upload

Run `.\package.ps1`, then upload the resulting `kaomojiboard-2.0.0.zip` under
**Package → Upload new package**.

Version goes 1.0.3 → **2.0.0**. It must be higher than 1.0.3, and this is a platform rewrite.

---

## 2. Store listing tab

**Description** (the current one is fine; this is a lightly freshened version):

> Copy Japanese kaomoji — text faces like ʕ•ᴥ•ʔ and (╯°□°）╯︵ ┻━┻ — straight to your clipboard.
>
> Click the toolbar icon, browse a curated set of ~200 kaomoji across seven categories (happy,
> funny, sad, angry, love, cute, animals), and click any one to copy it. Toggle the category
> buttons to filter — combine as many as you like. Hover a kaomoji and click its heart to save it
> to favorites, and a "frequently used" strip keeps your go-tos and recent picks pinned at the top.
>
> kaomojiBoard works entirely offline. It collects no data, makes no network requests, and
> asks for no access to the pages you visit.

**Category:** currently "Social Networking." Fine to leave; "Workflow & Planning" is arguably
a better fit. Either passes review.

**Screenshots — required, at least one, 1280×800 or 640×400.** The popup is only ~500px wide,
so compose it centered on a padded background rather than upscaling it (upscaled screenshots
look bad and reviewers notice). Suggested set:
1. The popup with all categories on, showing the labeled sections
2. The favorites + "frequently used" strips pinned at the top (favorite a few first)
3. The green ✓ confirmation right after a click

**Update notes** — worth writing, since 583 existing users will see this:

> A full refresh. kaomojiBoard is rebuilt on Manifest V3 so it works in current Chrome again,
> now with a cleaner UI: filter by category, save favorites with a click (finally!), and a
> "frequently used" strip keeps your go-tos handy. The kaomoji list has been curated to a tighter,
> higher-quality set, and fonts are bundled locally so every face renders correctly — no more
> empty boxes — while the extension makes zero network requests.

---

## 3. Privacy practices tab

**Single purpose:**

> kaomojiBoard displays a browsable palette of Japanese kaomoji (text emoticons) in the browser
> toolbar and copies the one you click to your clipboard.

**Justification for the `storage` permission:**

> Used solely to remember how many times you have clicked each kaomoji, so the "recent" tab can
> show your most-used ones first. This count is stored in the user's own browser profile via
> chrome.storage.sync and is never transmitted anywhere. The extension has no server and makes
> no network requests.

**Are you using remote code?** → **No, I am not using remote code.**
(Everything is bundled: jQuery, Bootstrap, and the VT323 font are all local files.)

**Data usage — tick nothing.** kaomojiBoard collects none of the listed categories:
no personally identifiable information, health, financial, authentication, personal
communications, location, web history, or user activity. Click counts never leave the device,
so they are not "collected" in the policy's sense.

Then check all three certification boxes:
- I do not sell or transfer user data to third parties, outside of the approved use cases
- I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- I do not use or transfer user data to determine creditworthiness or for lending purposes

**Privacy policy URL:**

```
https://github.com/cszhu/kaomojiboard/blob/master/PRIVACY.md
```

A GitHub file URL is accepted and needs no extra setup. If you'd rather have a nicer URL,
enable GitHub Pages on the repo and point it at `PRIVACY.md` instead.

---

## 4. Before you hit submit

- [ ] Loaded unpacked from a clean profile and confirmed zero errors/warnings on the card
- [ ] Clicked a kaomoji and pasted it somewhere — exact characters, ✓ appeared
- [ ] Recent tab survives closing and reopening the popup
- [ ] Popup still renders with the network disconnected (proves the font is local)
- [ ] Version in `manifest.json` is higher than 1.0.3
- [ ] Screenshot(s) uploaded at 1280×800
- [ ] Privacy policy URL resolves publicly

Review typically takes a few hours to a few days. Because this extension asks for one
low-sensitivity permission and collects nothing, it should be a straightforward review.

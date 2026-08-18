# kaomojiBoard Privacy Policy

_Last updated: August 17, 2026_

kaomojiBoard does not collect, transmit, sell, or share any personal information.

## What the extension does with data

kaomojiBoard keeps a count of how many times you have clicked each kaomoji. That count is
what powers the "recent" tab, which sorts your most-used kaomojis to the front.

This count is stored using Chrome's `chrome.storage.sync` API, so it lives in your own browser
profile. If you have Chrome Sync turned on, it syncs between your own signed-in Chrome
installations through your own Google account. The developer has no access to it and never
receives a copy of it.

The extension doesn't record what you paste, where you paste it, what pages you visit, or
anything else about you.

## Network activity

kaomojiBoard makes no network requests of any kind. Every asset it uses (the kaomoji
list, the stylesheets, the VT323 font) is bundled inside the extension package. There are no
analytics, no trackers, no third-party services, and no remote code. The extension works
identically offline.

## Permissions

kaomojiBoard requests exactly one permission:

- **`storage`**: used solely to remember the per-kaomoji click counts described above.

It requests no host permissions, so it has no ability to read or modify the pages you visit.

## Removing your data

Uninstalling the extension removes its stored data. You can also clear it at any time from
`chrome://settings/content/all` or by clearing synced extension data in your Google account.

## Changes

If this policy ever changes, the updated version will be published at this URL and reflected
in the "Last updated" date above.

## Contact

Questions or issues: https://github.com/cszhu/kaomojiboard/issues

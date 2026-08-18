# kaomojiboard

A Chrome extension for copying kaomoji. Click one and it's on your clipboard.

Chrome Web Store: https://chromewebstore.google.com/detail/kaomojiboard/alkepecgcogdcjleihdddioilhadjlna

## Features

- About 200 kaomoji in 7 categories: happy, funny, sad, angry, love, cute, animals.
- Category buttons to show or hide categories. You can turn on more than one.
- Click the heart on a kaomoji to save it to favorites.
- A "frequently used" row keeps your most used and most recent picks at the top.
- Works offline. No data collected, no network requests.

## Development

There is no build step. This folder is the extension.

1. Open `chrome://extensions`
2. Turn on Developer mode (top right)
3. Click Load unpacked and pick this folder
4. Click the kaomojiBoard icon in the toolbar

To debug, right click the popup and choose Inspect. After editing a file, hit the reload arrow on
the extension card, then reopen the popup.

## Files

```
manifest.json   Manifest V3 config
popup.html      The popup layout
js/kaomoji.js   The kaomoji list (the KAOMOJI object)
js/popup.js     All the logic
css/style.css   Styles and fonts
fonts/          VT323 font, plus small Noto font subsets so every kaomoji renders
```

To add a kaomoji, add a string to the right array in `js/kaomoji.js`.

## Packaging

Run `package.ps1` in PowerShell. It builds `kaomojiboard-<version>.zip` with just the files the
extension needs. Upload that zip in the Chrome Web Store dashboard.

## Privacy

kaomojiboard collects nothing and makes no network requests. See `PRIVACY.md`.

## License

VT323 and the Noto font subsets use the SIL Open Font License 1.1 (`fonts/OFL.txt` and
`fonts/noto/OFL.txt`).

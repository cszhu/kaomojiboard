# Builds the zip to upload to the Chrome Web Store.
# Usage:  .\package.ps1
#
# Entry names are written with forward slashes on purpose. Windows PowerShell's
# Compress-Archive writes backslashes, which violates the ZIP spec and can trip up
# the Web Store uploader, so this builds the archive entry by entry instead.

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = $PSScriptRoot

$manifest = Get-Content (Join-Path $root "manifest.json") -Raw | ConvertFrom-Json
$version  = $manifest.version
$outFile  = Join-Path $root "kaomojiboard-$version.zip"

# Everything the extension needs at runtime. Docs, scripts, and .git are excluded.
$include = @(
  "manifest.json",
  "popup.html",
  "icon.png",
  "icon48.png",
  "icon128.png",
  "css",
  "js",
  "fonts"
)

$missing = $include | Where-Object { -not (Test-Path (Join-Path $root $_)) }
if ($missing) { throw "Missing required paths: $($missing -join ', ')" }

# Expand the include list into concrete files, each paired with its zip entry name.
$files = @()
foreach ($item in $include) {
  $full = Join-Path $root $item
  if (Test-Path $full -PathType Container) {
    Get-ChildItem $full -Recurse -File | ForEach-Object {
      $rel = $_.FullName.Substring($root.Length + 1).Replace('\', '/')
      $files += [pscustomobject]@{ Path = $_.FullName; Entry = $rel }
    }
  } else {
    $files += [pscustomobject]@{ Path = $full; Entry = $item }
  }
}

if (Test-Path $outFile) { Remove-Item $outFile -Force }

$stream  = [System.IO.File]::Open($outFile, [System.IO.FileMode]::Create)
$archive = New-Object System.IO.Compression.ZipArchive($stream, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($f in $files) {
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
      $archive, $f.Path, $f.Entry, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
  }
} finally {
  $archive.Dispose()
  $stream.Dispose()
}

$sizeKb = [math]::Round((Get-Item $outFile).Length / 1KB, 1)
Write-Host "Built $outFile ($sizeKb KB, $($files.Count) files)"
Write-Host "Upload at https://chrome.google.com/webstore/devconsole"

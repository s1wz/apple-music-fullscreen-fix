# Apple Music Lyrics Fullscreen

A Firefox WebExtension that forces the Apple Music lyrics modal to display in fullscreen on all monitors, especially vertical ones.

## Features

- Forces lyrics modal to use full viewport dimensions (100vw × 100vh)
- Works on vertical monitors
- Lightweight and minimal
- - Automatic detection of lyrics modal using MutationObserver

## Installation

### Method 1: From GitHub Release (Recommended)
1. Go to the [Releases page](https://github.com/s1wz/apple-music-fullscreen/releases)
2. Download the latest `apple-music-fullscreen.zip` file
3. Extract the zip file to a folder on your computer
4. Follow the "Load Extension" steps below

### Method 2: From Source Code
1. Download or clone this repository
2. Follow the "Load Extension" steps below

## Load Extension in Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Navigate to the extension folder and select `manifest.json`
4. The extension will now be active on Apple Music pages

## Development

To modify the extension:
1. Edit the files in this repository
2. Reload the extension in Firefox's debugging page
3. Test your changes on Apple Music

## License

MIT License - feel free to use and modify as needed.


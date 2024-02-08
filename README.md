# Deco Tracker v2.1.1

## [<p align=center>Open Deco Tracker</p>](https://kappanjoe.github.io/seedling-tracker/)

- Tap the colored boxes to save which decorations you've collected and hatched.
- Collect all the decorations! :D

**Note:** JavaScript must be enabled in your browser. Your collection status will auto-save every time you update a box. Wiping your browser's local storage will delete the saved information.
<br/>
<hr/>

## About Deco Tracker

Deco Tracker is a tool for keeping tabs on which decorations/seeds you've collected in the mobile game 'Pikmin Bloom.' It's written in TypeScript and was bootstrapped with Create React App. A special thanks goes to M & J for beta testing and suggesting new features!

*Deco Tracker was made by @kappanjoe as a fan project, and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Pikmin Bloom, Nintendo, or Niantic or any of their respective subsidiaries or affliates.*

## Features
- NEW: Track which decorations you've collected in the game (separate from what you've hatched)
- Track which decorations you've hatched in the game
- Count the total number of decorations you've collected
- Choose between Light Mode or Dark Mode, or use your device's system default
- Import/Export your saved data for sharing or transferring between browsers/devices
- Display a guide to easily understand which columns represent which seed colors

## How to Use (For Developers)

1. Fork and Clone this Repository
2. Run `npm install` in the project directory
3. To deploy to GitHub Pages:
   - Run `npm run deploy` to create a `gh-pages` branch with the built app
   - On GitHub, visit Settings > Pages in the forked repo
   - Set "Source" to "Deploy from branch"
   - Set "Branch" to "gh-pages" and "/(root)"
   - Your deployment can be viewed at `https://[your-username].github.io/seedling-tracker/` by default. (You may need to run `npm run deploy` one more time to trigger the automatic GitHub Pages deployment.)
   - Run `npm run deploy` any time you want to update the GitHub Pages deployment with changes to your current branch.

## What's New

### v2.1.1 - February 8, 2024
- Added new Ramen decor colors
- Renamed Present Sticker to Valentine Sticker
- **Note:** A separate entry for 2024's Valentine Sticker decor will not be added, as the game considers it to be the same as the decor from 2023
- Improved speed of decor renaming algorithm
- Updated addt'l dependencies to remove security vulnerabilities

### v2.1.0 - January 30, 2024
- Renamed Lunar New Year Ornament 2022 → Lunar New Year Ornament (Red)
- Renamed Lunar New Year Ornament 2023 → Lunar New Year Ornament (Gold)
- Added new seedling colors to Lunar New Year Ornament decorations
- Updated dependencies to remove security vulnerabilities

...

### v2.0.0 - July 4, 2023
- Adopted Semantic Versioning
- Simplified state management for collected seeds
- Imports are no longer compatible with data from versions prior to v1.20
- A new 'Seed' state (clock icon) has been added to represent seeds that have been acquired but are not yet hatched. Tapping a checkbox will now cycle through the following states:
  1. Not collected (plus icon)
  2. Seed collected (clock icon)
  3. Seed hatched (circled checkmark icon)
- The 'Count Method' setting and related group data has been removed, as the game no longer skips over similar seeds within certain groups.

### [Click here to view full Changelog](/CHANGELOG.md)

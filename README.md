# Deco Tracker v1.08
Deco Tracker is a tool for keeping tabs on which decorations you've collected in the mobile game 'Pikmin Bloom.' It's written with TypeScript and was bootstrapped with Create React App. A special thanks goes to M & J for beta testing and suggesting new features!

*Deco Tracker was made by @kappanjoe as a fan project, and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Pikmin Bloom, Nintendo, or Niantic or any of their respective subsidiaries or affliates.*

## How to Use

1. Visit [Deco Tracker web app](https://kappanjoe.github.io/seedling-tracker/)
2. Check boxes for the colors of pikmin you have collected. All known variations are to be included.

**Note:** JavaScript must be enabled in your browser. Your collection status will auto-save every time you check or uncheck a box. Wiping your browser's cookies or local storage will remove the save file. Deco Tracker is still under development. Bugs *will* occur. :)

## Changelog

### v1.08
- Added color labels for accessbility

### v1.02
- Fixed bug where checkbox placeholders didn't transition smoothly between Dark/Light mode
- Added transition for when category counts are completed/completion is undone

### v1.01
- Sticky toolbar added with preferences menu (currently only toggles Dark mode)
- Transitions added to change in dark mode/collapsing categories
- Added "Jack-O' -Lantern" decor

### v0.9
- Dark Mode now supported! Tap/click the moon in the upper right to switch themes.
- Overall Total count is now displayed.
- More checkboxes now fit on one line for compatibility with smaller screens.

### v0.8

- Checkboxes are now easier to target! Tap/click anywhere inside a colored box to add or remove a check.
- Counts have been added to each decoration type. Totals are calculated for every variation and do not reflect in-game totals.

### v0.7

- Categories are now collapsible
- Updated data structures to allow saving of collapse states
- Checkbox color now reflects state

### v0.5

- Updated page title, favicons, etc.
- Added data structure and app versioning
- Updated data structures for more flexibility and cleaner handling
- Added storage checks and updating
- Added new decoration type 'Bus Stop'
- Added missing decoration type 'Theme Park B'

## TODO:

The to-do list has moved [here](/TODO.md).

## Create React App:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Information on how to run and build this project locally can be found [here](/CREATE-REACT.md).
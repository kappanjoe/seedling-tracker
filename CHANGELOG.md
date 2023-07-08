# Changelog

## v2.0.1 - July 8, 2023
- Added Spaceship decor

## v2.0.0 - July 4, 2023
- Adopted Semantic Versioning
- Simplified state management for collected seeds
- Imports are no longer compatible with data from versions prior to v1.20
- A new 'Seed' state (clock icon) has been added to represent seeds that have been acquired but are not yet hatched. Tapping a checkbox will now cycle through the following states:
  1. Not collected (plus icon)
  2. Seed collected (clock icon)
  3. Seed hatched (circled checkmark icon)
- The 'Count Method' setting and related group data has been removed, as the game no longer skips over similar seeds within certain groups.

## v1.67
- Separate Chess Piece into Black and White colors

## v1.66
- Added "Donut" decor

## v1.651
- Added additional colors to "Fingerboard" decor

## v1.65
- Added "Bridge Badge" decor

## v1.64
- Fixed an issue where the "Present Sticker (Gold)" decor appeared where the "Sneaker Keychain" decor should be

## v1.63
- Added "Sneaker Keychain" decor

## v1.62
- Added "Present Sticker (Gold)" decor

## v1.61
- Added "Ramen Keychain" decor

## v1.60
- Added "Coin" decor
- Added "Easter Egg" decor

## v1.591
- Added new colors to "Sushi" decor
- Running out of version numbers...

## v1.59
- Added "Pizza" decor in "Italian Restaurant" category

## v1.58
- Added "Present Sticker" decor

## v1.57
- Update Lunar New Year Ornament variations to be counted separately when the count method used in-game is selected

## v1.56
- Added "Lunar New Year Ornament 2023" decor variation
- Updated previous "Lunar New Year Ornament" decor to indicate 2022 variation

## v1.54
- Added new "2023 Glasses" decor

## v1.53
- Added new "Mitten" decor
- Clarified explanation in Import/Export menu

## v1.51
- Added new "Ball Keychain" decor

## v1.5
- Added new "Koppaite Space Suit" decor
- Overall total count now sticks under toolbar
- Fixed a bug where the label for the game-based count setting was styled with the wrong text color

## v1.4
- Added Import/Export function for transferring data between devices, backing up data in a text file, etc.

## v1.3
- Added new "1st Anniversary Snack" decor
- Updated `seeds.json` to version 1.0 (full schema for groupings and current decor)
- You can now turn on game-based counting using the prefs menu to check if your Deco Tracker overall total matches your game!

## v1.2
- Button in toolbar now opens preferences menu with options to set theme (dark mode, etc.), hide color labels, etc.

## v1.12
- Window background color now matches color-scheme
- Removed unnecessary space in "Jack-O' -Lantern" in seeds.json (version 0.9)

## v1.11
- Updated app icon
- Adjusted placement of color labels to stay within safe area
- Category totals are now displayed when collapsed
- Category collapse states are saved when updating

## v1.08
- Added color labels for accessbility
- Checkbox colors adjusted for consistency and performance

## v1.02
- Fixed bug where checkbox placeholders didn't transition smoothly between Dark/Light mode
- Added transition for when category counts are completed/completion is undone

## v1.01
- Sticky toolbar added with preferences menu (currently only toggles Dark mode)
- Transitions added to change in dark mode/collapsing categories
- Added "Jack-O' -Lantern" decor

## v0.9
- Dark Mode now supported! Tap/click the moon in the upper right to switch themes.
- Overall total count is now displayed.
- More checkboxes now fit on one line for compatibility with smaller screens.

## v0.8

- Checkboxes are now easier to target! Tap/click anywhere inside a colored box to add or remove a check.
- Counts have been added to each decoration type. Totals are calculated for every variation and do not reflect in-game totals.

## v0.7

- Categories are now collapsible
- Updated data structures to allow saving of collapse states
- Checkbox color now reflects state

## v0.5

- Updated page title, favicons, etc.
- Added data structure and app versioning
- Updated data structures for more flexibility and cleaner handling
- Added storage checks and updating
- Added new decoration type 'Bus Stop'
- Added missing decoration type 'Theme Park B'

</details>
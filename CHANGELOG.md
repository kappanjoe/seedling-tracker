# Changelog

## v2.2.3 - April 12, 2024
- Added Spring Sticker decor

## v2.2.1, v2.2.2 - April 6, 2024
- Added Rabbit Egg decor
- Relocated Winter Sticker decor to the Special category

## v2.2.0 - April 3, 2024
- Refactored seeds data structure (Updated to v3.0.0)
- This fix removes bugs causing duplicate seeds, etc., but please note that some data loss may occur as a result of this transition.
- The Import/Export feature has been temporarily disabled until it is updated to be compatible with the new data structure.

## v2.1.6 - March 30, 2024
- Added Curry Bowl decor

## v2.1.5 - March 29, 2024
- Various updates and fixes

## v2.1.4 - March 21, 2024
- Added Reverse Valentine's Day Sticker

## v2.1.3 - February 28, 2024
- Hotfix: Remove duplicate Lunar New Year decor

## v2.1.2 - February 28, 2024
- Added Flower Card 2024 decor
- Renamed 2023 Hanafuda decor to Flower Card 2023 to align with game

## v2.1.1 - February 8, 2024
- Added new Ramen decor colors
- Renamed Present Sticker to Valentine Sticker
- **Note:** A separate entry for 2024's Valentine Sticker decor will not be added, as the game considers it to be the same as the decor from 2023
- Improved speed of decor renaming algorithm
- Fixed a bug that prevented names from correctly updating

## v2.1.0 - January 30, 2024
- Renamed Lunar New Year Ornament 2022 → Lunar New Year Ornament (Red)
- Renamed Lunar New Year Ornament 2023 → Lunar New Year Ornament (Gold)
- Added new seedling colors to Lunar New Year Ornament decorations
- Updated dependencies to remove security vulnerabilities

## v2.0.17 - January 1, 2024
- Happy New Year!
- Added new 2024 Glasses decor
- Added new colors to each Fortune decor

## v2.0.16 - December 19, 2023
- Added new Snow decor in Snowy Day category
- Renamed Weather category to Rainy Day

## v2.0.15 - December 6, 2023
- Added new Fairy Lights decors

## v2.0.14 - December 2, 2023
- Added new colors to Mitten decor

## v2.0.13 - November 23, 2023
- Added Battery decor
- Renamed "Shrine / Temple" category for consistency

## v2.0.12 - November 5, 2023
- Added Puzzle: 2021 Fall / 2022 Summer Memories decors

## v2.0.11 - October 28, 2023
- Updated order of decor in Special category to better reflect game order

## v2.0.10 - October 3, 2023
- Added Shrines and Temples category with Fortune decor

## v2.0.9 - October 1, 2023
- Added Halloween Treat Decor

## v2.0.8 - September 15, 2023
- Fixed a bug where the category list would not update to match the in-game list

## v2.0.7 - September 14, 2023
- Added Makeup decor
- Updated category order to match in-game list

## v2.0.6 - September 4, 2023
- Added Ice Cream decor

## v2.0.5 - August 8, 2023
- Added Hotel Amenities decor
- Fixed bug where new categories were not added to local storage

## v2.0.4 - August 3, 2023
- Added Mahjong Tile decor sets

## v2.0.3 - July 18, 2023
- Added colors to Present Sticker (Gold) decor

## v2.0.2 - July 8, 2023
- Added Spaceship decor
- Added Setting: Track unhatched seeds
- Added Setting: Include unhatched seeds in count

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
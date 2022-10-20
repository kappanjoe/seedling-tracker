# TODO:

## Github Pages
- [x] Set up Github Pages
- [x] Update favicon, app icon, etc.

## PWA
- [ ] Installation prompt

## General Features
- [x] Data structure updates/versioning
  - [x] Bus Stop
  - [x] Theme Park B
- [x] Color labels/color-blind accessibility
- [x] Coloring based on checkbox state
- [x] Collapsible category headers
- [ ] Current total counts
  - [ ] "Official" totals (i.e., how they're counted in-game without counting some variations)
  - [x] 100% completionist totals (counting every possible variation)
  - [x] Overall Total display
  - [x] "Completed!" element
  - [x] Show total count for category when collapsed
- [x] Dark Mode
- [x] Transitions
  - [x] Collapsing categories
  - [x] Dark Mode/Light Mode toggle
  - [x] Completed counts
- [ ] Detail views?
- [x] Toolbar
- [ ] Menu for options (Dark mode, count type, color labels/accessibility, collapse all)

## Bugs
### JSON Handling
  - [x] Category collapsed state reset when updating localStorage to new version
### Transitions
  - [ ] Collapsing categories doesn't animate change in space between categories
  - [x] Transition between dark and light mode doesn't animate color for checkbox placeholders
### Other UI
  - [x] Single-pixel white border sometimes visible at bottom of page
  - [x] "Jack-O' -Lantern" name spacing typo
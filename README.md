# Deco Tracker v0.9
Deco Tracker is a tool for keeping tabs on which decorations you've collected in the mobile game 'Pikmin Bloom.' It's written with TypeScript and was bootstrapped with Create React App.

*Deco Tracker was made by @kappanjoe as a fan project, and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Pikmin Bloom, Nintendo, or Niantic or any of their respective subsidiaries or affliates.*

## How to Use

1. Visit [Deco Tracker web app](https://kappanjoe.github.io/seedling-tracker/)
2. Check boxes for the colors of pikmin you have collected. All known variations are to be included.

**Note:** JavaScript must be enabled in your browser. Your collection status will auto-save every time you check or uncheck a box. Wiping your browser's cookies or local storage will remove the save file. Deco Tracker is still under development. Bugs *will* occur. :)

## Changelog

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

### Github Pages
- [x] Set up Github Pages
- [x] Update favicon, app icon, etc.

### Features
- [x] Data structure updates/versioning
  - [x] Bus Stop
  - [x] Theme Park B
- [ ] Color labels/color-blind accessibility
- [x] Coloring based on checkbox state
- [x] Collapsible category headers
- [ ] Current total counts
  - [ ] "Official" totals (i.e., how they're counted in-game without counting some variations)
  - [x] 100% completionist totals (counting every possible variation)
  - [x] Overall Total display
  - [x] "Completed!" element
- [x] Dark Mode
- [ ] Animations
- [ ] Detail views?
- [ ] Toolbar/Menu for options (Dark mode, count type, color labels/accessibility)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

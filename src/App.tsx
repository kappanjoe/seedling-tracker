import React, { useState } from 'react';
import { CategoryView } from './components/CategoryView';
import { CountSpan } from './components/CountSpan';
import { Toolbar } from './components/Toolbar';
import { GuideGrid } from './components/GuideGrid';
import { ColorState, Groups, Preferences, Structure } from './types/classes.d';
import structure from './seeds.json';
import './App.css';


function App() {
	const { info, colors, categories, groups, decorations } = new Structure(structure);
	var userMem: Structure | any;
	var userPrefs = new Preferences();

	//-- INITIAL CHECKS --//
		// Seeds = { Info, Categories, Decorations ... }
	if (!("decorations" in localStorage)) {
		console.log("Decorations item undefined.");
		// Current version of seeds not implemented
		if ("seeds" in localStorage) {
			console.log("Version 0.4 or earlier - upgrading");
			// Version 0.4 or earlier of seeds exists; upgrade version
			userMem = JSON.parse(localStorage.getItem("seeds")!);
			upgradeSeeds();
		} else {
			console.log("No seeds found - quietly initializing");
			// No version of seeds exists; initialize with current version
			initializeSeeds();
		}
	} else if ("info" in localStorage) {
		// Recent version of seeds (0.5 or later) implemented; load and update version if not current
		// Initialize userPrefs if not stored
		if (!("userPrefs" in localStorage)) {
			localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
		}
		if ("theme" in localStorage) {
			userPrefs.theme = localStorage.getItem("theme")!;
			localStorage.removeItem("theme");
			localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
		}
		if (!("categories" in localStorage)) {
			localStorage.setItem("categories", JSON.stringify(categories));
		}
		if (!("groups" in localStorage)) {
			localStorage.setItem("groups", JSON.stringify(groups));
		}

		loadStorage();
		if (userMem.info.seedsVersion < info.seedsVersion || userMem.info.appVersion < info.appVersion) {
			console.log("New version available - upgrading");
			upgradeSeeds();
		}
	} else {
		// Data incompatible; reinitialize
		alert("Could not load saved data. Reinitializing.");
		initializeSeeds();
	}
	//-- END INITIAL CHECKS --//


	// Initialize seeds with current version and reload
	function initializeSeeds() {
		localStorage.clear();
		localStorage.setItem("info", JSON.stringify(info));
		localStorage.setItem("decorations", JSON.stringify(decorations));
		localStorage.setItem("categories", JSON.stringify(categories));
		localStorage.setItem("groups", JSON.stringify(groups));
		localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
		console.log("Initialization completed");
		window.location.reload();
	}

	// Upgrade older version of seeds to current version
	function upgradeSeeds() {
		// Check for "decorations" to avoid overwriting
		if (!userMem.decorations) {
			// Reformat version < 0.4 (if exists) to include ColorState.Nil values for all unused colors
			if (userMem.decorTypes) {
				userMem.decorTypes.forEach( (x: Decoration) => {
					for (let each of colors) {
						if (x.colors[each as keyof ColorSet] === undefined) {
							x.colors[each as keyof ColorSet] = ColorState.Nil;
						}
					}
				});
			}
			reinitDecorations(userMem.decorTypes);
		} else {
			// Fix Jack-O'-Lantern decoration name spacing typo
			let i = userMem.decorations.findIndex( (x: Decoration) => {
				return x.name === "Jack-O' -Lantern";
			});
			if (i >= 0) {
				userMem.decorations[i].name = "Jack-O'-Lantern";
			}

			// Append 2022 to existing Lunar New Year Ornament decoration
			let j = userMem.decorations.findIndex( (x: Decoration) => {
				return x.name === "Lunar New Year Ornament";
			});
			if (j >= 0) {
				userMem.decorations[j].name = "Lunar New Year Ornament 2022";
			}

			// Separate Chess Piece decor by Black/White
			let k = userMem.decorations.findIndex( (x: Decoration) => {
				return x.name === "Chess Piece";
			});
			if (k >= 0) {
				userMem.decorations[k].name = "Chess Piece (White)";
				userMem.decorations.push({
					"name": "Chess Piece (Black)",
					"catInd": 21,
					"colors": {
						"red": ColorState.Off, "yellow": userMem.decorations[k].colors.yellow, "blue": ColorState.Off,
						"white": ColorState.Off, "purple": userMem.decorations[k].colors.purple, "grey": ColorState.Off, "pink": ColorState.Off
					},
					"group": null
				});
				userMem.decorations[k].colors.yellow = ColorState.Off;
				userMem.decorations[k].colors.purple = ColorState.Off;
			}

			reinitDecorations(userMem.decorations);
		}
		// Initialize new Categories in localStorage or Reinit with new + saved open states
		if (!userMem.categories) {
			localStorage.setItem("categories", JSON.stringify(categories));
		} else {
			var tempCats = categories;
			userMem.categories.forEach( (x: Category) => {
				let j = tempCats.findIndex( (y: Category) => {
					return x.name === y.name;
				});
				if (j >= 0) {
					tempCats[j].isOpen = x.isOpen
				}
			});
			localStorage.setItem("categories", JSON.stringify(tempCats));
		}
		// Initialize new Groups in localStorage or Reinit with new + saved group values
		if (!userMem.groups) {
			localStorage.setItem("groups", JSON.stringify(groups));
		} else {
			var tempGroups = new Groups(structure.groups);
			Object.keys(userMem.groups).forEach( (x) => {
				tempGroups[x as keyof Groups] = userMem.groups[x as keyof Groups];
			});
			localStorage.setItem("groups", JSON.stringify(tempGroups));
		}
		// Initialize new Groups in localStorage or Reinit with new + saved group values
		if (!("userPrefs" in localStorage)) {
			localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
		} else {
			var tempPrefs = new Preferences();
			let localPrefs = JSON.parse(localStorage.getItem("userPrefs")!);
			Object.keys(localPrefs).forEach( (x) => {
				tempPrefs[x] = localPrefs[x];
			});
			localStorage.setItem("userPrefs", JSON.stringify(tempPrefs));
		}
		// Save all values to localStorage and remove old version
		localStorage.removeItem("seeds");
		localStorage.setItem("info", JSON.stringify(info));
		localStorage.setItem("decorations", JSON.stringify(userMem.decorations));
		window.location.reload();
	}

	// Reinitialize decorations array
	function reinitDecorations(source: Decoration[]) {
		// Create temporary decor array and fill with existing values from outdated version or default values from current
		var tempDecor: Decoration[] = [];
		decorations.forEach( (x: Decoration) => {
			let i = source.findIndex( (y: Decoration) => {
				return y.name === x.name;
			});
			if (i >= 0) {
				// Update group or catInd
				if (source[i].group !== x.group) {
					source[i].group = x.group;
				}
				if (source[i].catInd !== x.catInd) {
					source[i].catInd = x.catInd;
				}
				Object.keys(x.colors).forEach( (z: string) => {
					if (x.colors[z as keyof ColorSet] !== ColorState.Nil && source[i].colors[z as keyof ColorSet] === ColorState.Nil) {
						source[i].colors[z as keyof ColorSet] = ColorState.Off;
					}
				});
				tempDecor.push(source[i]);
			} else {
				tempDecor.push(x);
			}
		})
		// Assign tempDecor to userMem.decorations
		userMem.decorations = tempDecor;
	}

	// Load userMem to populate UI
	function loadStorage() {
		userMem = new Structure(structure);
		userMem.info = JSON.parse(localStorage.getItem("info")!) as typeof info;
		userMem.decorations = JSON.parse(localStorage.getItem("decorations")!) as Decoration[];
		userMem.categories = JSON.parse(localStorage.getItem("categories")!);
		userMem.groups = JSON.parse(localStorage.getItem("groups")!);
		userPrefs = JSON.parse(localStorage.getItem("userPrefs")!);
	}

	// Enable theme switching and assign current pref to bgColor
	var themePref: string = userPrefs.theme;
	const [themeMode, setThemeMode] = useState(themePref);

	var bgColor: string;
  	if (themeMode === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			bgColor = "#191919";
		} else {
			bgColor = "#f9f8f3";
		}
	} else if (themeMode === 'dark') {
		bgColor = "#191919";
	} else {
		bgColor = "#f9f8f3";
	}

	// Store theme -- must be one of three options: "light", "dark", or "system"
	function saveTheme(newTheme: string) {
		setThemeMode(newTheme);
		userPrefs.theme = newTheme;
		localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
	}

	// Store currently selected counting method && handle full counting of all seeds using either complete or in-game methods
	function countDecor() {
		var count = 0;
		var max = 0;

		(userMem.decorations as Decoration[]).forEach( (deco) => {
			Object.keys(deco.colors).forEach( (color) => {
				let value = deco.colors[color as keyof ColorSet];
				if (value === ColorState.On) {
					count++;
					max++;
				} else if (value === ColorState.Off) {
					max++;
				}
			})
		});

		return [count, max];
	}

	// Run initial count
	let [initCount, initMax] = countDecor();
	const [currentFullCount, setCurrentFullCount] = useState(initCount);
	const [fullMax, setFullMax] = useState(initMax);

	// Update count on changes to any checkboxes
	function updateFullCount() {
		let [newCount, newMax] = countDecor();
		setCurrentFullCount(newCount);
		setFullMax(newMax);
	}

	// Store current visibility state of color labels guide
	const [labelsOn, setLabelsOn] = useState(userPrefs.labelsOn as boolean);
	function saveLabels() {
		userPrefs.labelsOn = !labelsOn;
		localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
	}

	document.documentElement.setAttribute('data-theme', themeMode === 'system'? (window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light') : themeMode);

	return (
		<div className="App transition-colors">
			<meta name="theme-color" content={ bgColor }/>
			<meta name="viewport" content="width=device-width, maximum-scale=1.0, viewport-fit=cover"/>
			<Toolbar
			 labelState={ [labelsOn, setLabelsOn] }
			 labelHandler={ saveLabels }
			 themeState={ themeMode }
			 themeHandler={ saveTheme }
			 userMem={ userMem }/>
			<div className='App-body'>
				<CountSpan count={ currentFullCount } max={ fullMax } category={ false }/>
				{ categories.map( (category) => {
					return <CategoryView
							key={ category.name }
							index={ categories.indexOf(category) }
							categories={ userMem.categories }
							decorations={ userMem.decorations }
							updateFullCount={ updateFullCount }/>;
				})}
				<GuideGrid visibility={ labelsOn }/>
				<span className='Version-info'>App: v{ info.appVersion } - Seeds: v{ info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;

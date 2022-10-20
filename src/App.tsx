import { useState } from 'react';
import './App.css';
import { Category } from './components/Category';
import structure from './seeds.json';
import { CountSpan } from './components/CountSpan';
import { Toolbar } from './components/Toolbar';
import { GuideGrid } from './components/GuideGrid';

export type decoration = {
	// Names must be unique!!
	name: string;
	catInd: number;
	colors: colors;
	group: string | null;
};

export type colors = {
	red: string;
	yellow: string;
	blue: string;
	white: string;
	purple: string;
	grey: string;
	pink: string;
};

export type category = { 
	name: string;
	values: number[];
	isOpen: boolean;
};

function App() {
	const { info, colors, categories, decorations } = structure;
	type structure = typeof structure;
	var storage: structure | any;

	// Set themeing
	// Get stored preference or use system pref
	var preference: string;
	if ("theme" in localStorage) {
		preference = localStorage.getItem("theme")!;
	} else {
		preference = "system";
	}
	// Enable theme switching and assign current pref to bgColor
	const [themeMode, setThemeMode] = useState(preference);
	var bgColor: string;
  	if (themeMode === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setThemeMode('dark')
			bgColor = "#191919";
		} else {
			setThemeMode('light')
			bgColor = "#f9f8f3";
		}
	} else if (themeMode === 'dark') {
		bgColor = "#191919";
	} else {
		bgColor = "#f9f8f3";
	}

	function switchTheme() {
    	const newTheme = themeMode === 'light'? 'dark' : 'light';
		setThemeMode(newTheme);
		localStorage.setItem("theme", newTheme);
	}
	//---- Theme should move from toggle to selection with three options: system, dark, light
	function changeTheme(to: string = themeMode) {
		setThemeMode(to);
		localStorage.setItem("theme", to);
	}

	//-- INITIAL CHECKS --//
	if (!("decorations" in localStorage)) {
		console.log("Decorations item undefined.");
		// Current version of storage not implemented
		if ("seeds" in localStorage) {
			console.log("Version 0.4 or earlier - upgrading");
			// Version 0.4 or earlier of storage exists; upgrade version
			storage = JSON.parse(localStorage.getItem("seeds")!);
			upgradeStorage();
		} else {
			console.log("No storage found - quietly initializing");
			// No version of storage exists; initialize with current version
			initializeStorage();
		}
	} else if ("info" in localStorage) {
		// Recent version of storage (0.5 or later) implemented; load and update version if not current
		loadStorage();
		if (storage.info.seedsVersion < info.seedsVersion || storage.info.appVersion < info.appVersion) {
			console.log("New version available - upgrading");
			upgradeStorage();
		}
	} else {
		// Data incompatible; reinitialize
		alert("Could not load saved data. Reinitializing.");
		initializeStorage();
	}
	//-- END INITIAL CHECKS --//


	// Initialize storage with current version and reload
	function initializeStorage() {
		localStorage.clear();
		localStorage.setItem("info", JSON.stringify(info));
		localStorage.setItem("decorations", JSON.stringify(decorations));
		localStorage.setItem("categories", JSON.stringify(categories));
		console.log("Initialization completed");
		window.location.reload();
	}

	// Load storage to populate UI
	function loadStorage() {
		storage = structure as structure;
		storage.info = JSON.parse(localStorage.getItem("info")!) as typeof info;
		storage.decorations = JSON.parse(localStorage.getItem("decorations")!) as decoration[];
		storage.categories = JSON.parse(localStorage.getItem("categories")!) as typeof categories;
	}

	// Upgrade older version of storage to current version
	function upgradeStorage() {
		// Check for "decorations" to avoid overwriting
		if (!storage.decorations) {
			// Reformat version < 0.4 (if exists) to include "nil" values for all unused colors
			if (storage.decorTypes) {
				storage.decorTypes.forEach( (x: decoration) => {
					for (let each of colors) {
						if (x.colors[each as keyof colors] === undefined) {
							x.colors[each as keyof colors] = "nil";
						}
					}
				});
			}
			reinitDecorArray(storage.decorTypes);
		} else {
			// Fix Jack-O'-Lantern decoration name spacing typo
			let i = storage.decorations.findIndex( (x: decoration) => {
				return x.name === "Jack-O' -Lantern";
			})
			if (i >= 0) {
				storage.decorations[i].name = "Jack-O'-Lantern";
			}
			reinitDecorArray(storage.decorations);
		}
		// Initialize Categories in localStorage or Reinit with saved open states
		if (!storage.categories) {
			localStorage.setItem("categories", JSON.stringify(categories));
		} else {
			var tempCats = categories;
			storage.categories.forEach( (x: category) => {
				let j = tempCats.findIndex( (y: category) => {
					return x.name === y.name;
				});
				if (j >= 0) {
					tempCats[j].isOpen = x.isOpen
				}
			})
			localStorage.setItem("categories", JSON.stringify(tempCats));
		}
		// Save all values to localStorage and remove old version
		localStorage.removeItem("seeds");
		localStorage.setItem("info", JSON.stringify(info));
		localStorage.setItem("decorations", JSON.stringify(storage.decorations));
		window.location.reload();
	}

	// Reinitialize decorations array
	function reinitDecorArray(source: decoration[]) {
		// Create temporary decor array and fill with existing values from outdated version or default values from current
		var tempDecor: decoration[] = [];
		decorations.forEach( (x: decoration) => {
			let i = source.findIndex( (y: decoration) => {
				return y.name === x.name;
			});
			if (i >= 0) {
				tempDecor.push(source[i]);
			} else {
				tempDecor.push(x);
			}
		})
		// Assign tempDecor to storage.decorations
		storage.decorations = tempDecor;
	}

	// Calculate full count of decorations
	var fullCount = 0;
	var fullMax = 0;
	(storage.decorations as decoration[]).forEach( (deco) => {
		Object.keys(deco.colors).forEach( (color) => {
		let value = deco.colors[color as keyof colors];
		if (value === "on") {
			fullCount++;
			fullMax++;
		} else if (value === "off") {
			fullMax++;
		}
		})
	});
	const [currentFullCount, setCurrentFullCount] = useState(fullCount);

	function bigCountHandler() {
		var count = 0;
		(storage.decorations as decoration[]).forEach( (deco) => {
			Object.keys(deco.colors).forEach( (color) => {
				let value = deco.colors[color as keyof colors];
				if (value === "on") {
					count++;
				}
			})
		});
		setCurrentFullCount(count);
	}

	document.documentElement.setAttribute('data-theme', themeMode);

	return (
		<div className="App transition-colors">
			<meta name="theme-color" content={ bgColor }/>
			<meta name="viewport" content="width=device-width, maximum-scale=1.0, viewport-fit=cover"/>
			<Toolbar switchThemeOld={ switchTheme }/>
			<div className='App-body'>
				<CountSpan count={ currentFullCount } max={ fullMax } category={ false }/>
				{ categories.map( (category) => {
					return <Category
							key={ category.name }
							index={ categories.indexOf(category) }
							categories={ storage.categories }
							decorations={ storage.decorations }
							bigCountHandler={ bigCountHandler }/>;
				})}
				<GuideGrid/>
				<span className='Version-info'>App: v{ info.appVersion } - Seeds: v{ info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;

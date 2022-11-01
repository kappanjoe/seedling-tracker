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

interface Indexable {
	[key: string]: any
}

class Preferences implements Indexable {
	[key: string]: string | boolean;
	theme: string;
	labelsOn: boolean;
	useInGameCount: boolean;
	
	constructor() {
		this.theme = "system";
		this.labelsOn = true;
		this.useInGameCount = false;
	}
};

class Groups implements Indexable {
	[key: string]: colors;
	chef: colors;
	hanafuda: colors;
	sticker: colors;
	themepark: colors;

	constructor() {
		this.chef = JSON.parse(JSON.stringify(structure.groups.chef));
		this.hanafuda = JSON.parse(JSON.stringify(structure.groups.hanafuda));
		this.sticker = JSON.parse(JSON.stringify(structure.groups.sticker));
		this.themepark = JSON.parse(JSON.stringify(structure.groups.themepark));
	}
}

class Structure implements Indexable {
	[key: string]: any;
	info: {
		seedsVersion: number;
		appVersion: number;
	};
	colors: Array<string>;
	categories: Array<category>;
	groups: Groups;
	decorations: Array<decoration>;

	constructor() {
		this.info = JSON.parse(JSON.stringify(structure.info));
		this.colors = JSON.parse(JSON.stringify(structure.colors));
		this.categories = JSON.parse(JSON.stringify(structure.categories));
		this.groups = JSON.parse(JSON.stringify(structure.groups));
		this.decorations = JSON.parse(JSON.stringify(structure.decorations));
	}

}

function App() {
	const { info, colors, categories, groups, decorations } = new Structure();
	var storage: Structure | any;
	var userPrefs = new Preferences();

	//-- INITIAL CHECKS --//
		// Seeds = { Info, Categories, Decorations ... }
	if (!("decorations" in localStorage)) {
		console.log("Decorations item undefined.");
		// Current version of seeds not implemented
		if ("seeds" in localStorage) {
			console.log("Version 0.4 or earlier - upgrading");
			// Version 0.4 or earlier of seeds exists; upgrade version
			storage = JSON.parse(localStorage.getItem("seeds")!);
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
		if (storage.info.seedsVersion < info.seedsVersion || storage.info.appVersion < info.appVersion) {
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
			reinitDecorations(storage.decorTypes);
		} else {
			// Fix Jack-O'-Lantern decoration name spacing typo
			let i = storage.decorations.findIndex( (x: decoration) => {
				return x.name === "Jack-O' -Lantern";
			});
			if (i >= 0) {
				storage.decorations[i].name = "Jack-O'-Lantern";
			}
			reinitDecorations(storage.decorations);
		}
		// Initialize new Categories in localStorage or Reinit with new + saved open states
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
			});
			localStorage.setItem("categories", JSON.stringify(tempCats));
		}
		// Initialize new Groups in localStorage or Reinit with new + saved group values
		if (!storage.groups) {
			localStorage.setItem("groups", JSON.stringify(groups));
		} else {
			var tempGroups = new Groups();
			Object.keys(storage.groups).forEach( (x) => {
				tempGroups[x as keyof Groups] = storage.groups[x as keyof Groups];
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
		localStorage.setItem("decorations", JSON.stringify(storage.decorations));
		window.location.reload();
	}

	// Reinitialize decorations array
	function reinitDecorations(source: decoration[]) {
		// Create temporary decor array and fill with existing values from outdated version or default values from current
		var tempDecor: decoration[] = [];
		decorations.forEach( (x: decoration) => {
			let i = source.findIndex( (y: decoration) => {
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
				tempDecor.push(source[i]);
			} else {
				tempDecor.push(x);
			}
		})
		// Assign tempDecor to storage.decorations
		storage.decorations = tempDecor;
	}

	// Load storage to populate UI
	function loadStorage() {
		storage = new Structure();
		storage.info = JSON.parse(localStorage.getItem("info")!) as typeof info;
		storage.decorations = JSON.parse(localStorage.getItem("decorations")!) as decoration[];
		storage.categories = JSON.parse(localStorage.getItem("categories")!);
		storage.groups = JSON.parse(localStorage.getItem("groups")!);
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
	const [useInGameCount, setUseInGameCount] = useState(userPrefs.useInGameCount as boolean);
	function countDecor() {
		var count = 0;
		var max = 0;
		
		// Run using count based on in-game methods
		if (userPrefs.useInGameCount) {
			// Create temporary store based on empty state
			let tempGroups = new Groups();
			// Iterate over every decor
			(storage.decorations as decoration[]).forEach( (deco) => {
				// Run if decor belongs to a group
				if (deco.group != null) {
					Object.keys(deco.colors).forEach( (color) => {
						let value = deco.colors[color as keyof colors];
						if (value === "on") {
							// Change to "on" for whichever colors are collected for respective group
							tempGroups[deco.group as keyof Groups][color as keyof colors] = "on";
						}
					});
				} else {
				// Run if decor is not in a group
					Object.keys(deco.colors).forEach( (color) => {
						let value = deco.colors[color as keyof colors];
						if (value === "on") {
							count++;
							max++;
						} else if (value === "off") {
							max++;
						}
					});
				}
			});
			// Count any colors indicated as "on" for each group
			Object.keys(tempGroups).forEach( (group) => {
				let groupColors = tempGroups[group as keyof Groups];
				Object.keys(groupColors).forEach( (color) => {
					let value = groupColors[color as keyof colors];
					if (value === "on") {
						count++;
						max++;
					} else if (value === "off") {
						max++;
					}
				});
			});
			localStorage.setItem("groups", JSON.stringify(tempGroups));
		} else {
		// Run using 100% completionist count (default)
			(storage.decorations as decoration[]).forEach( (deco) => {
				Object.keys(deco.colors).forEach( (color) => {
					let value = deco.colors[color as keyof colors];
					if (value === "on") {
						count++;
						max++;
					} else if (value === "off") {
						max++;
					}
				})
			});
		}
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

	// Store currently selected counting method
	function saveCountMethod() {
		userPrefs.useInGameCount = !useInGameCount;
		localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
		updateFullCount();
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
			 countMethodState={ [useInGameCount, setUseInGameCount] }
			 countMethodHandler={ saveCountMethod }/>
			<div className='App-body'>
				<CountSpan count={ currentFullCount } max={ fullMax } category={ false }/>
				{ categories.map( (category) => {
					return <Category
							key={ category.name }
							index={ categories.indexOf(category) }
							categories={ storage.categories }
							decorations={ storage.decorations }
							updateFullCount={ updateFullCount }/>;
				})}
				<GuideGrid visibility={ labelsOn }/>
				<span className='Version-info'>App: v{ info.appVersion } - Seeds: v{ info.seedsVersion }</span>
			</div>
		</div>
	)
};

export default App;

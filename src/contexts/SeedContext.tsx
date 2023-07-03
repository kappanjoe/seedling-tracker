import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorState, Preferences } from '../types/classes.d';
import structure from '../seeds.json';

export const SeedContext = createContext<ISeedContext>({
	categories: structure.categories,
	saveCats: () => {},
	colors: structure.colors as Colors,
	setColors: () => {},
	decorations: structure.decorations,
	saveDecos: () => {},
	preferences: Preferences,
	savePrefs: () => {}
});

interface Props {
	children: React.ReactNode
};

export const SeedContextProvider = ({ children }: Props) => {
	const [categories, setCategories] = useState(structure.categories);
	const [colors, setColors] = useState(structure.colors as Colors);
	const [decorations, setDecorations] = useState(structure.decorations as Decoration[]);
	// TODO: Change decorations from Array to Object
	// TODO: Use isLoading state to avoid rendering unloaded decos/cats
	const [preferences, setPreferences] = useState(new Preferences());

	// Initialize seeds with current version and reload
	const initStorage = () => {
		localStorage.clear();
		localStorage.setItem("categories", JSON.stringify(categories));
		localStorage.setItem("decorations", JSON.stringify(decorations));
		localStorage.setItem("userPrefs", JSON.stringify(preferences));
		console.log("Initialization completed");
		window.location.reload();
	};

	const updateCats = (inputCats: Category[]) => {
		let workingCats = inputCats;
		categories.forEach( (sourceCat: Category) => {
			let i = workingCats.findIndex( (targetCat: Category) => {
				return targetCat.name === sourceCat.name;
			});
			if (i >= 0) {
				workingCats[i].values = sourceCat.values
			}
		});
		return workingCats;
	};

	const saveCats = (inputCats: Category[]) => {
		setCategories(inputCats);
		localStorage.setItem("categories", JSON.stringify(inputCats));
	};

	const updateDecos = (inputDecos: Decoration[]) => {
		let workingDecos = inputDecos;

		// Fix Jack-O'-Lantern decoration name spacing typo
		let i = decorations.findIndex( (x: Decoration) => {
			return x.name === "Jack-O' -Lantern";
		});
		if (i >= 0) {
			workingDecos[i].name = "Jack-O'-Lantern";
		}

		// Append 2022 to existing Lunar New Year Ornament decoration
		let j = decorations.findIndex( (x: Decoration) => {
			return x.name === "Lunar New Year Ornament";
		});
		if (j >= 0) {
			workingDecos[j].name = "Lunar New Year Ornament 2022";
		}

		// Separate Chess Piece decor by Black/White
		let k = decorations.findIndex( (x: Decoration) => {
			return x.name === "Chess Piece";
		});
		if (k >= 0) {
			workingDecos[k].name = "Chess Piece (White)";
			workingDecos.push({
				"name": "Chess Piece (Black)",
				"catInd": 21,
				"colors": {
					"red": ColorState.Off, "yellow": workingDecos[k].colors.yellow, "blue": ColorState.Off,
					"white": ColorState.Off, "purple": workingDecos[k].colors.purple, "grey": ColorState.Off, "pink": ColorState.Off
				}
			});
			workingDecos[k].colors.yellow = ColorState.Off;
			workingDecos[k].colors.purple = ColorState.Off;
		}

		// Fill in new colors in existing decorations with non-nil values
		decorations.forEach( (sourceDeco: Decoration) => {
			let i = workingDecos.findIndex( (targetDeco: Decoration) => {
				return targetDeco.name === sourceDeco.name;
			});
			// If an existing deco in workingDecos matches the newest version of the deco (sourceDeco)
			if (i >= 0) {
				// Override category index with new value if changed
				if (workingDecos[i].catInd !== sourceDeco.catInd) {
					workingDecos[i].catInd = sourceDeco.catInd;
				}
				// For each of the colors in sourceDeco that is not nil, but has a nil value in workingDecos...
				Object.keys(sourceDeco.colors).forEach( (color: string) => {
					if (sourceDeco.colors[color as keyof ColorSet] !== ColorState.Nil && workingDecos[i].colors[color as keyof ColorSet] === ColorState.Nil) {
						// ...Set the workingDecos value to 'off'
						workingDecos[i].colors[color as keyof ColorSet] = ColorState.Off;
					}
				});
			} else {
				// Add any sourceDeco that is not already found in workingDecos
				workingDecos.push(sourceDeco);
			}
		})

		return workingDecos;
	};

	const saveDecos = (inputDecos: Decoration[]) => {
		setDecorations(inputDecos);
		localStorage.setItem("decorations", JSON.stringify(inputDecos));
	};

	const updatePrefs = (inputPrefs: Preferences) => {
		let workingPrefs = preferences;
		Object.keys(inputPrefs).forEach( (x) => {
			workingPrefs[x] = inputPrefs[x];
		});
		return workingPrefs;
	};

	const savePrefs = (inputPrefs: Preferences) => {
		setPreferences(inputPrefs);
		localStorage.setItem("userPrefs", JSON.stringify(inputPrefs));
	};

	const loadLocalStorage = async () => {
		if ('categories' in localStorage) {
			let localCats: Category[] = JSON.parse(localStorage.getItem("categories")!);
			let updatedCats = updateCats(localCats);
			setCategories(updatedCats);
		}
		if ('decorations' in localStorage) {
			let localDecos: Decoration[] = JSON.parse(localStorage.getItem("decorations")!);
			let updatedDecos = updateDecos(localDecos);
			setDecorations(updatedDecos);
		}
		if ('groups' in localStorage) {
			localStorage.removeItem('groups');
		}
		if ('info' in localStorage) {
			localStorage.removeItem('info');
		}
		if ('userPrefs' in localStorage) {
			let localPrefs: Preferences = JSON.parse(localStorage.getItem("userPrefs")!);
			let updatedPrefs = updatePrefs(localPrefs);
			setPreferences(updatedPrefs);
		}
	};

	useEffect(() => {
		//-- INITIAL CHECKS --//
		// Seeds = { Info, Categories, Decorations ... }
		if (!("decorations" in localStorage) || !("categories" in localStorage)) {
			console.log("Could not find data in local storage.");
			initStorage();
		} else {
			// Recent version of seeds (0.5 or later) implemented; load and update version if not current
			// Initialize userPrefs if not stored
			if (!("userPrefs" in localStorage)) {
				localStorage.setItem("userPrefs", JSON.stringify(preferences));
			}

			if ("theme" in localStorage) {
				let userTheme = localStorage.getItem("theme")!;
				setPreferences({
					...preferences,
					theme: userTheme
				});
				localStorage.removeItem("theme");
				localStorage.setItem("userPrefs", JSON.stringify(preferences));
			}

			loadLocalStorage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return <SeedContext.Provider value={{ categories, saveCats, colors, setColors, decorations, saveDecos, preferences, savePrefs }}>
		{ children }
	</SeedContext.Provider>;
};

export const useSeedContext = () => {
	return useContext(SeedContext);
};
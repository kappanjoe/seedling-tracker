import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorState, Preferences } from '../types/classes.d';
import structure from '../seeds';

export const SeedContext = createContext<ISeedContext>({
	categories: structure.categories,
	saveCats: () => {},
	colors: structure.colors as Colors,
	setColors: () => {},
	decorations: structure.decorations,
	saveDecos: () => {},
	preferences: Preferences,
	savePrefs: () => {},
	contextLoaded: false
});

interface Props {
	children: React.ReactNode
};

export const SeedContextProvider = ({ children }: Props) => {
	const [categories, setCategories] = useState(structure.categories);
	const [colors, setColors] = useState(structure.colors as Colors);
	const [decorations, setDecorations] = useState(structure.decorations as Decoration[]);
	// TODO: Migrate Decorations to Object-based structure
	const [preferences, setPreferences] = useState(new Preferences());
	const [contextLoaded, setContextLoaded] = useState(false);

	const initStorage = () => {
		localStorage.clear();
		localStorage.setItem("categories", JSON.stringify(categories));
		localStorage.setItem("decorations", JSON.stringify(decorations));
		localStorage.setItem("userPrefs", JSON.stringify(preferences));
		console.log("Initialization completed");
		window.location.reload();
	};

	const updateCats = (inputCats: Category[]) => {
		// TODO: Check English Category names
		// TODO: Migrate Categories to Object-based structure
		let workingCats: Category[] = [];
		categories.forEach( (sourceCat: Category) => {
			let i = inputCats.findIndex( (targetCat: Category) => {
				return targetCat.name === sourceCat.name;
			});
			if (i >= 0) {
				workingCats.push({ ...inputCats[i], values: sourceCat.values });
			} else {
				workingCats.push(sourceCat);
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

		// Update decor names
		inputDecos.forEach( (x: Decoration, i: number) => {
			switch (x.name) {
			case "Jack-O' -Lantern":
				workingDecos[i].name = "Jack-O'-Lantern";
				break;
			case "Lunar New Year Ornament":
				workingDecos[i].name = "Lunar New Year Ornament (Red)";
				break;
			case "Lunar New Year Ornament 2022":
				workingDecos[i].name = "Lunar New Year Ornament (Red)";
				break;
			case "Lunar New Year Ornament 2023":
				workingDecos[i].name = "Lunar New Year Ornament (Gold)";
				break;
			case "Present Sticker":
				workingDecos[i].name = "Valentine Sticker";
				break;
			case "Chess Piece":
				workingDecos[i].name = "Chess Piece (White)";
				workingDecos.push({
					"name": "Chess Piece (Black)",
					"catInd": 21,
					"colors": {
						"red": ColorState.Off, "yellow": workingDecos[i].colors.yellow, "blue": ColorState.Off,
						"white": ColorState.Off, "purple": workingDecos[i].colors.purple, "grey": ColorState.Off, "pink": ColorState.Off
					}
				});
				workingDecos[i].colors.yellow = ColorState.Off;
				workingDecos[i].colors.purple = ColorState.Off;
				break;
			default:
				if (/^Hanafuda [A-F]$/.test(x.name)) {
					workingDecos[i].name = "2023 Flower Card " + x.name.charAt(x.name.search(/[A-F]$/));
				}
				if (i === 90 && workingDecos[i].name.includes("Lunar")) {
					workingDecos[i].name = "2024 Flower Card A";
				}
				if (i === 91 && workingDecos[i].name.includes("Lunar")) {
					workingDecos[i].name = "2024 Flower Card B";
				}
				if (i === 92 && workingDecos[i].name.includes("Flower")) {
					workingDecos[i].name = "Reverse Valentine's Day Sticker";
				}
				break;
			}
		});

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
				// FIX: prevent pushing duplicate decors - update structure using values from local? (inverse of current algorithm, which updates local using values from structure)
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
		setContextLoaded(true);
	};

	useEffect(() => {
		//-- INITIAL CHECKS --//
		if (!("decorations" in localStorage) || !("categories" in localStorage)) {
			console.log("Could not find data in local storage.");
			initStorage();
		} else {
			// Initialize userPrefs if not in localStorage
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


	return <SeedContext.Provider value={{ categories, saveCats, colors, setColors, decorations, saveDecos, preferences, savePrefs, contextLoaded }}>
		{ children }
	</SeedContext.Provider>;
};

export const useSeedContext = () => {
	return useContext(SeedContext);
};
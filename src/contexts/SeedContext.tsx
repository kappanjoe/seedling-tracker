import React, { createContext, useContext, useEffect, useState } from 'react';
import defaultSeeds from '../constants/seeds';
import { Preferences } from '../types/classes.d';

export const SeedContext = createContext<ISeedContext>({
	colors: defaultSeeds.colors,
	categories: defaultSeeds.categories,
	saveCats: () => {},
	categoryOrder: [],
	preferences: new Preferences(),
	savePrefs: () => {},
	contextLoaded: false
});

interface Props {
	children: React.ReactNode
};

export const SeedContextProvider = ({ children }: Props) => {
	const colors = defaultSeeds.colors;
	const [categories, setCategories] = useState(defaultSeeds.categories);
	const categoryOrder = defaultSeeds.categoryOrder;
	const [preferences, setPreferences] = useState(new Preferences());
	const [contextLoaded, setContextLoaded] = useState(false);

	const updateDecorColors = (baseDecorColors: ColorIndex, oldDecorColors: ColorIndex): ColorIndex => {
		let newDecorColors = baseDecorColors;
		for (let colorKey in baseDecorColors) {
			if (baseDecorColors[colorKey as Color] !== "nil") {
				newDecorColors[colorKey as Color] = oldDecorColors[colorKey as Color];
			}
		}
		return newDecorColors;
	};

	const updateCats = (savedCats: Indexable<Category>): Indexable<Category> => {
		let newCats = defaultSeeds.categories;
		// For every available old category
		defaultSeeds.categoryOrder.forEach((defaultCatKey: string) => {
			// Update the new category with the isOpen state if it exists in the old list
			if (savedCats[defaultCatKey]) {
				newCats[defaultCatKey].isOpen = savedCats[defaultCatKey].isOpen;
				// And for every decoration in that category
				savedCats[defaultCatKey].decorationOrder.forEach((savedDecorKey: string) => {
					// Update the new category with only the valid decoration colors from the old category
					newCats[defaultCatKey].decorations[savedDecorKey].colors = updateDecorColors(newCats[defaultCatKey].decorations[savedDecorKey].colors, savedCats[defaultCatKey].decorations[savedDecorKey].colors);
				});
			}
		});
		return newCats;
	};

	const saveCats = (inputCats: Indexable<Category>) => {
		setCategories(inputCats);
		localStorage.setItem("categories", JSON.stringify(inputCats));
	};

	const updatePrefs = (oldPrefs: Preferences): Preferences => {
		let newPrefs = preferences;
		Object.keys(newPrefs).forEach((x) => {
			if (Object.hasOwn(oldPrefs, x)) {
				newPrefs[x] = oldPrefs[x];
			}
		});
		return newPrefs;
	};

	const savePrefs = (inputPrefs: Preferences) => {
		setPreferences(inputPrefs);
		localStorage.setItem("userPrefs", JSON.stringify(inputPrefs));
	};

	const createNewLocalCategoriesFromOldDecors = (decorations: any[]): Indexable<Category> => {
		const comparableName = (name: string) => {
			return name.replaceAll('-', '').replaceAll(' ', '');
		};

		let newLocalCategories: Indexable<Category> = defaultSeeds.categories;
		let oldLocalCategories = JSON.parse(localStorage.getItem('categories') ?? '');

		if (oldLocalCategories !== '' && Array.isArray(oldLocalCategories)) {

			// Cross check every category in defaultSeeds against every old local category
			for (let newCatKey of defaultSeeds.categoryOrder) {

				for (let oldCategory of oldLocalCategories) {

					// When its clear match is found, update the isOpen value and then...
					if (comparableName(oldCategory.name) === comparableName(newLocalCategories[newCatKey].name)) {
						newLocalCategories[newCatKey].isOpen = oldCategory.isOpen;

						// Cross check every decoration in the current defaultSeeds category against every old decoration
						for (let newDecorKey of newLocalCategories[newCatKey].decorationOrder) {
							for (let oldDecoration of decorations) {

								// When its clear match is found...
								if (comparableName(oldDecoration.name) === comparableName(newLocalCategories[newCatKey].decorations[newDecorKey].name)) {

									// Update every color that isn't set to 'nil' in the current defaultSeeds decoration with the locally stored value
									newLocalCategories[newCatKey].decorations[newDecorKey].colors = updateDecorColors(newLocalCategories[newCatKey].decorations[newDecorKey].colors, oldDecoration.colors);

									// Continue to the next defaultSeed decoration since a match was found
									break;
								}

							}
						}

						// Continue to the next defaultSeed category since a match was found
						break;
					}

				}
			}

		}

		return newLocalCategories;
	};

	useEffect(() => {
		//-- INITIAL CHECKS --//

		if ("decorations" in localStorage) {
			// Upgrade old decorations to new categories
			let newCategories = createNewLocalCategoriesFromOldDecors(JSON.parse(localStorage.getItem('decorations')!));
			localStorage.removeItem('decorations');
			saveCats(newCategories);
		} else if ("categories" in localStorage) {
			// Update categories normally
			let newCategories = updateCats(JSON.parse(localStorage.getItem('categories')!));
			saveCats(newCategories);
		} else {
			saveCats(defaultSeeds.categories);
		}

		// Update or initialize userPrefs
		if (("userPrefs" in localStorage)) {
			let newPrefs = updatePrefs(JSON.parse(localStorage.getItem("userPrefs")!));
			setPreferences(newPrefs);
		} else {
			localStorage.setItem("userPrefs", JSON.stringify(preferences));
		}

		setContextLoaded(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return <SeedContext.Provider value={{ colors, categories, saveCats, categoryOrder, preferences, savePrefs, contextLoaded }}>
		{ children }
	</SeedContext.Provider>;
};

export const useSeedContext = () => {
	return useContext(SeedContext);
};
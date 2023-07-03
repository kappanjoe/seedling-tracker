declare interface Indexable {
	[key: string]: any
};

declare interface ISeedContext {
	categories: Category[],
	saveCats: function,
	colors: Colors,
	setColors: React.Dispatch<SetStateAction<Colors>>,
	decorations: Decoration[],
	saveDecos: function,
	preferences: Preferences,
	savePrefs: function
};
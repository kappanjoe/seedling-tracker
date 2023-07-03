declare interface Indexable {
	[key: string]: any
};

declare interface ISeedContext {
	categories: Category[],
	setCategories: React.Dispatch<SetStateAction<Category[]>>,
	colors: Colors,
	setColors: React.Dispatch<SetStateAction<Colors>>,
	decorations: Decoration[],
	setDecorations: React.Dispatch<SetStateAction<Decoration[]>>,
	preferences: Preferences,
	setPreferences: React.Dispatch<SetStateAction<Preferences>>
};
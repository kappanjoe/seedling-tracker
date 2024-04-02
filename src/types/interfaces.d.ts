declare interface ColorIndex {
	red: ColorState;
	yellow: ColorState;
	blue: ColorState;
	white: ColorState;
	purple: ColorState;
	grey: ColorState;
	pink: ColorState;
};

declare interface Indexable<T> {
	[key: string]: T;
};

declare interface Decoration {
	catKey: string;
	key: string;
	name: string;
	colors: ColorIndex;
};

declare interface Category {
	key: string;
	name: string;
	isOpen: boolean;
	decorations: Indexable<Decoration>;
	decorationOrder: string[];
};

declare interface ISeedContext {
	colors: Color[];
	categories: Indexable<Category>;
	saveCats: function;
	categoryOrder: string[];
	preferences: Preferences;
	savePrefs: function;
	contextLoaded: boolean;
};

declare interface SeedStructure {
	readonly info: Info;
	readonly colors: Color[];
	readonly decorationCount: number;
	readonly categoryOrder: string[];
	readonly categories: Indexable<Category>;
};

declare interface Indexable {
	[key: string]: any
};

declare interface ISeedContext {
	info: Indexable,
	decorations: Decoration[],
	categories: Category[],
	groups: Group[]
};
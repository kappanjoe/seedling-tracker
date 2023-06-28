declare class Structure implements Indexable {
	[key: string]: Array<T> | Groups | { [key: string]: number } ;
	info: {
		seedsVersion: number;
		appVersion: number;
	};
	colors: Array<string>;
	categories: Array<Category>;
	groups: Groups;
	decorations: Array<Decoration>;

	constructor() {
		this.info = JSON.parse(JSON.stringify(structure.info));
		this.colors = JSON.parse(JSON.stringify(structure.colors));
		this.categories = JSON.parse(JSON.stringify(structure.categories));
		this.groups = JSON.parse(JSON.stringify(structure.groups));
		this.decorations = JSON.parse(JSON.stringify(structure.decorations));
	}

};

declare class Groups implements Indexable {
	[key: string]: ColorSet;
	chef: ColorSet;
	hanafuda: ColorSet;
	sticker: ColorSet;
	themepark: ColorSet;

	constructor() {
		this.chef = JSON.parse(JSON.stringify(structure.groups.chef));
		this.hanafuda = JSON.parse(JSON.stringify(structure.groups.hanafuda));
		this.sticker = JSON.parse(JSON.stringify(structure.groups.sticker));
		this.themepark = JSON.parse(JSON.stringify(structure.groups.themepark));
	}
};

declare class Preferences implements Indexable {
	[key: string]: string | boolean;
	theme: string;
	labelsOn: boolean;

	constructor() {
		this.theme = "system";
		this.labelsOn = true;
	}
};
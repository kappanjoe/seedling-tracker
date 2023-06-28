export class Groups implements Indexable {
	[key: string]: ColorSet;
	chef: ColorSet;
	hanafuda: ColorSet;
	sticker: ColorSet;
	themepark: ColorSet;

	constructor(groups: Indexable) {
		this.chef = JSON.parse(JSON.stringify(groups.chef));
		this.hanafuda = JSON.parse(JSON.stringify(groups.hanafuda));
		this.sticker = JSON.parse(JSON.stringify(groups.sticker));
		this.themepark = JSON.parse(JSON.stringify(groups.themepark));
	}
};

export class Structure implements Indexable {
	[key: string]: Array<T> | Groups | { [key: string]: number } ;
	info: Info;
	categories: Category[];
	colors: string[];
	decorations: Decoration[];
	groups: Groups;

	constructor(structure: Indexable) {
		this.info = JSON.parse(JSON.stringify(structure.info));
		this.colors = JSON.parse(JSON.stringify(structure.colors));
		this.categories = JSON.parse(JSON.stringify(structure.categories));
		this.groups = JSON.parse(JSON.stringify(structure.groups));
		this.decorations = JSON.parse(JSON.stringify(structure.decorations));
	}
};

export class Preferences implements Indexable {
	[key: string]: string | boolean;
	theme: string;
	labelsOn: boolean;

	constructor() {
		this.theme = "system";
		this.labelsOn = true;
	}
};

export enum ColorState {
	Nil = "nil",
	Off = "off",
	On = "on"
};
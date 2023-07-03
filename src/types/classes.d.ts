export class Structure implements Indexable {
	[key: string]: Array<T> | Groups | { [key: string]: number } ;
	categories: Category[];
	colors: string[];
	decorations: Decoration[];
	info: Info;

	constructor(structure: Indexable) {
		this.categories = JSON.parse(JSON.stringify(structure.categories));
		this.colors = JSON.parse(JSON.stringify(structure.colors));
		this.decorations = JSON.parse(JSON.stringify(structure.decorations));
		this.info = JSON.parse(JSON.stringify(structure.info));
	}
};

export class Preferences implements Indexable {
	[key: string]: string | boolean;
	labelsOn: boolean;
	theme: string;

	constructor() {
		this.labelsOn = true;
		this.theme = "system";
	}
};

export enum ColorState {
	Nil = "nil",
	Off = "off",
	On = "on"
};
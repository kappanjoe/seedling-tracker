declare type Decoration = {
	// Names must be unique!!
	name: string;
	catInd: number;
	colors: ColorSet;
	group: string | null;
};

declare type ColorSet = {
	red: string;
	yellow: string;
	blue: string;
	white: string;
	purple: string;
	grey: string;
	pink: string;
};

declare type Category = {
	name: string;
	values: number[];
	isOpen: boolean;
};
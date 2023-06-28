declare type Category = {
	name: string;
	values: number[];
	isOpen: boolean;
};

declare type ColorSet = {
	red: ColorState;
	yellow: ColorState;
	blue: ColorState;
	white: ColorState;
	purple: ColorState;
	grey: ColorState;
	pink: ColorState;
};

declare type Decoration = {
	// Names must be unique!!
	name: string;
	catInd: number;
	colors: ColorSet;
	group: string | null;
};

declare type Info = {
	appVersion: number;
	seedsVersion: number;
};
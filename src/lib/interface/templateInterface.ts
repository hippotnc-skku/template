export interface DropDownItem {
	title: string;
	icon?: string;
	link: string;
}

export interface RouteItem {
	title: string;
	link?: string;
	icon: string;
	items?: RouteItem[];
}

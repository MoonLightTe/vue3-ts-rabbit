export interface Children {
	id: string;
	name: string;
	picture: string;
	children?: any;
	goods?: any;
}

export interface Good {
	id: string;
	name: string;
	desc: string;
	price: string;
	picture: string;
	discount?: any;
	orderNum?: any;
}

export interface CategoryItem {
	id: string;
	name: string;
	picture: string;
	children: Children[];
	goods: Good[];
}

export type CategoryList = CategoryItem[]

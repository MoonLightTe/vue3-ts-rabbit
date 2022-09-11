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
export interface BannerItem {
	id: string;
	imgUrl: string;
	hrefUrl: string;
	type: string;
}

export interface newGoodsItem {
	id: string;
	name: string;
	desc: string;
	price: string;
	picture: string;
	discount?: any;
	orderNum: number;
}

export type CategoryList = CategoryItem[]
export type BannerList = BannerItem[]
export type newGoodsList = newGoodsItem[]

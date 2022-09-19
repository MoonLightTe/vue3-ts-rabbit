export  type AddGoods={
  skuId:string,
  count:number
}

export interface CartItem {
	id: string;
	skuId: string;
	name: string;
	attrsText: string;
	// specs: any[];
	picture: string;
	price: string;
	nowPrice: string;
	nowOriginalPrice: string;
	selected: boolean;
	stock: number;
	count: number;
	isEffective: boolean;
	// discount?: any;
	isCollect: boolean;
	postFee: number;
}

export interface mergeItem{
  skuId:string,
  selected:boolean,
  count:number
}

export type CartList = CartItem[]

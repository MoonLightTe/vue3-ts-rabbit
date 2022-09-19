export interface UserAddresse {
	id: string;
	receiver: string;
	contact: string;
	provinceCode: string;
	cityCode: string;
	countyCode: string;
	address: string;
	isDefault: number;
	fullLocation: string;
	postalCode: string;
	addressTags?: any;
}

export interface Good {
	id: string;
	name: string;
	picture: string;
	count: number;
	skuId: string;
	attrsText: string;
	price: string;
	payPrice: string;
	totalPrice: string;
	totalPayPrice: string;
}

export interface Summary {
	goodsCount: number;
	totalPrice: number;
	totalPayPrice: number;
	postFee: number;
	discountPrice: number;
}

export interface  CheckoutInfo  {
	userAddresses: UserAddresse[];
	goods: Good[];
	summary: Summary;
}

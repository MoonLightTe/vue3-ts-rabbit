export interface GoodsItem{
  skuId:string;
  count:number;
}

export interface Address {
  receiver:string;
  contact: string;
  provinceCode: string;
  cityCode: string;
  countyCode: string;
  address: string;
  postalCode: string;
  addressTags: string;
  isDefault: numberstring;
  fullLocation: string;
 }

export interface SubOrder{
  goods:GoodsItem[];
  addressId:string;
  deliveryTimeType:number;
  payType:number;
  payChannel:number;
  buyerMessage:string;
}

// 提交订单返回的数据
export interface SubmitCheckout {
  id: string;
  createTime: string;
  payType: number;
  orderState: number;
  payLatestTime: string;
  postFee: number;
  payMoney: number;
  totalMoney: number;
  totalNum: number;
  // skus?: any;
  payChannel: number;
  // countdown?: any;
}




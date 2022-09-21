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




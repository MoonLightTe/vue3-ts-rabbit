export interface Property {
  propertyMainName: string;
  propertyValueName: string;
}

export interface Sku {
  id: string;
  spuId: string;
  name: string;
  quantity: number;
  image: string;
  realPay: number;
  curPrice: number;
  totalMoney?: any;
  properties: Property[];
  attrsText: string;
}

export interface OrderDetail {
  id: string;
  createTime: string;
  payType: number;
  orderState: number;
  payLatestTime: string;
  countdown: number;
  postFee: number;
  payMoney: number;
  payChannel: number;
  payState: number;
  totalMoney: number;
  totalNum: number;
  deliveryTimeType: number;
  receiverContact: string;
  receiverMobile: string;
  provinceCode: string;
  cityCode: string;
  countyCode: string;
  receiverAddress: string;
  payTime?: any;
  consignTime?: any;
  endTime?: any;
  closeTime?: any;
  evaluationTime?: any;
  skus: Sku[];
  arrivalEstimatedTime?: any;
}

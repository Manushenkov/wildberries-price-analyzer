export interface WarehouseRaw {
  id: number;
  name: string;
  type: number;
}

export interface StockRaw {
  wh: number;
  qty: number;
  priority: number;
  time1: number;
  time2: number;
}

export interface Size {
  name: string;
  origName: string;
  rank: number;
  optionId: number;
  returnCost: number;
  stocks: StockRaw[];
}

export interface Product {
  id: number;
  root: number;
  kindId: number;
  subjectId: number;
  subjectParentId: number;
  name: string;
  brand: string;
  brandId: number;
  siteBrandId: number;
  supplier: string;
  supplierId: number;
  priceU: number;
  salePriceU: number;
  logisticsCost: number;
  sale: number;
  extended: {
    basicSale: number;
    basicPriceU: number;
    clientSale?: number;
    clientPriceU?: number;
  };
  saleConditions: number;
  returnCost: number;
  pics: number;
  rating: number;
  reviewRating: number;
  feedbacks: number;
  volume: number;
  viewFlags: number;
  colors: [
    {
      name: string;
      id: number;
    }
  ];
  sizes: Size[];
}

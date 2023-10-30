export interface Warehouse {
  warehouseName: string;
  quantity: number;
  deliveryDelay: number;
}

export interface WarehouseNamesMap {
  [warehouseId: number]: { name: string };
}

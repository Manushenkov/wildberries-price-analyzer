import { WarehouseNamesMap } from "../types/common";
import { WarehouseRaw } from "../types/rawData";

const WAREHOUSES_URL = `https://static-basket-01.wb.ru/vol0/data/stores-data.json`;

export default async function fetchWarehousesData() {
  const res = await fetch(WAREHOUSES_URL, {
    headers: { "Content-Type": "application/json" },
  });
  const warehousesArray = (await res.json()) as WarehouseRaw[];

  const warehousesMap: WarehouseNamesMap = {};

  for (const warehouse of warehousesArray) {
    warehousesMap[warehouse.id] = { name: warehouse.name };
  }

  return warehousesMap;
}

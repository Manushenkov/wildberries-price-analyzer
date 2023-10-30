import { Warehouse } from "../types/common";

export default function findClosestWarehouse(
  warehouses: Warehouse[]
): Warehouse {
  const minTime = Math.min(
    ...warehouses.map(({ deliveryDelay }) => deliveryDelay)
  );
  return warehouses.find(({ deliveryDelay }) => deliveryDelay === minTime);
}

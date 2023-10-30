import { Warehouse, WarehouseNamesMap } from '../types/common'
import { Product, StockRaw } from '../types/rawData'

export default function formatWarehousesData(
	product: Product,
	warehouses: WarehouseNamesMap
): Warehouse[] {
	const globalStocksMap: { [warehouseId: number]: Warehouse } = {}

	product.sizes.forEach((size) =>
		size.stocks.forEach((stock) => {
			const warehouseId = stock.wh
			if (!globalStocksMap[warehouseId]) {
				globalStocksMap[warehouseId] = new Wh(warehouses[warehouseId], stock)
			} else {
				globalStocksMap[warehouseId].quantity += stock.qty
			}
		})
	)

	return Object.values(globalStocksMap)
}

class Wh implements Warehouse {
	warehouseName: string
	quantity: number
	deliveryDelay: number

	constructor(warehouse: { name: string }, stock: StockRaw) {
		this.warehouseName = this.formatWhName(warehouse.name)
		this.quantity = stock.qty
		this.deliveryDelay = stock.time1 + stock.time2
	}

	formatWhName(warehouseName: string) {
		if (warehouseName.endsWith(' WB')) return warehouseName.slice(0, -3)

		return warehouseName
	}
}

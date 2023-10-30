import { Product } from '../types/rawData'

export default async function fetchCardInfo(id: string, xinfo: string): Promise<Product> {
	const res = await fetch(`https://card.wb.ru/cards/detail?${xinfo}&nm=${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})

	const json = await res.json()
	return json.data.products[0]
}

import { Product } from '../types/rawData'

const CARD_DETAIL_URL = 'https://card.wb.ru/cards/detail'

function generateCardUrl(id: string, xinfo: string) {
	return `${CARD_DETAIL_URL}?${xinfo}&nm=${id}`
}

export default async function fetchCardInfo(id: string, xinfo: string): Promise<Product> {
	const res = await fetch(generateCardUrl(id, xinfo), {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})

	const json = await res.json()
	return json.data.products[0]
}

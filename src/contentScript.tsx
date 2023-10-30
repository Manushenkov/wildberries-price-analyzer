import { h } from 'dom-chef'
import SpecialOfferInfo from './components/SpecialOfferInfo/SpecialOfferInfo'
import WarehousesInfo from './components/WarehousesInfo/WarehousesInfo'
import waitForElement from './helpers/waitForElement'
import getCardInfo from './fetchers/fetchCardInfo'
import fetchXinfo from './fetchers/fetchXinfo'
import getCardId from './helpers/getCardId'
import fetchWarehousesData from './fetchers/fetchWarehousesData'
import formatWarehousesData from './helpers/formatWarehousesData'
import cleanupElements from './helpers/cleanupElements'

const React = h

const PRODUCT_PAGE_SELECTOR = '.product-page'
const DESKTOP_OFFER_TARGET_SELECTOR = '.product-page__aside .product-page__price-block'
const WAREHOUSES_TARGET_SELECTOR = '.product-page__aside-container'
const MOBILE_OFFER_TARGET_SELECTOR = '.product-page__price-block .price-block'

initialize()

chrome.runtime.onMessage.addListener((request) => {
	if (request.message === 'tabUpdated') {
		cleanupElements()
		initialize()
	}
})

async function initialize() {
	try {
		await waitForElement(PRODUCT_PAGE_SELECTOR)
		const desktopOfferTarget = await waitForElement(DESKTOP_OFFER_TARGET_SELECTOR)
		const mobileOfferTarget = await waitForElement(MOBILE_OFFER_TARGET_SELECTOR)
		const warehousesTarget = await waitForElement(WAREHOUSES_TARGET_SELECTOR)

		const { specialOfferData, warehousesData } = await obtainInitialData()

		desktopOfferTarget.insertAdjacentElement('afterend', SpecialOfferInfo(specialOfferData))
		mobileOfferTarget.insertAdjacentElement('afterend', SpecialOfferInfo(specialOfferData))

		warehousesTarget.insertAdjacentElement('afterend', WarehousesInfo(warehousesData))
	} catch (error) {
		console.error(error)
	}
}

async function obtainInitialData() {
	const [xinfo, warehouses] = await Promise.all([fetchXinfo(), fetchWarehousesData()])

	const cardId = getCardId()
	const cardInfo = await getCardInfo(cardId, xinfo)

	const warehousesData = formatWarehousesData(cardInfo, warehouses)

	const specialOfferData = {
		discount: cardInfo.extended.clientSale,
		preDiscount: cardInfo.extended.basicPriceU,
	}

	return { specialOfferData, warehousesData }
}

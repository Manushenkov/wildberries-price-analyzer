const CATALOG = 'catalog'

export default function getCardId() {
	const splitPath = document.location.pathname.split('/')
	return splitPath[splitPath.indexOf(CATALOG) + 1]
}

const CATALOG = 'catalog'

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if (changeInfo.url?.includes(CATALOG)) {
		chrome.tabs.sendMessage(tabId, {
			message: 'tabUpdated',
			url: changeInfo.url,
		})
	}
})

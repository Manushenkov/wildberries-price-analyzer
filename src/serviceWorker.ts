const CATALOG = "catalog";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.url && changeInfo.url.includes(CATALOG)) {
    chrome.tabs.sendMessage(tabId, {
      message: "tabUpdated",
      url: changeInfo.url,
    });
  }
});

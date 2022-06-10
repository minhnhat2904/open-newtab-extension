chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url':"edge://newtab"})
})
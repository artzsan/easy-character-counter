chrome.runtime.onInstalled.addListener(() => {
    console.log("Easy Character Counter installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updateCharCount") {
        chrome.action.setBadgeText({ text: message.charCount.toString() });
    }
});

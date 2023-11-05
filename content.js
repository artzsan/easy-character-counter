function getSelectedText() {
    const selectedText = window.getSelection().toString();
    return selectedText;
}

function countCharacters(selectedText) {
    // マルチバイト文字を考慮した文字数のカウント
    return Array.from(selectedText).length;
}

function sendCharacterCount() {
    const selectedText = getSelectedText();
    const charCount = countCharacters(selectedText);
    chrome.runtime.sendMessage({ action: "updateCharCount", charCount: charCount });
}

document.addEventListener("mouseup", sendCharacterCount);

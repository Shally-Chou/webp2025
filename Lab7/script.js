const container = document.getElementById('container');

// 亂數產生小寫字母
function getRandomChar() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// 亂數產生 0-N 個字元
function getRandomString(maxChars) {
    const length = Math.floor(Math.random() * (maxChars + 1));
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomChar();
    }
    return result;
}

// 初始化 container 內容
function initializeContainer() {
    container.textContent = getRandomString(2);
    setTimeout(() => container.focus(), 100); // 確保 container 可輸入
}

// keyup 時，增加新的字元
function addNewChars() {
    const randomLength = Math.floor(Math.random() * 3) + 1; // 產生 1 到 3 的隨機數
    let newChars = '';
    for (let i = 0; i < randomLength; i++) {
        newChars += getRandomChar();
    }
    container.textContent += newChars;
}

// 移除第一個字元
function removeFirstChar() {
    if (container.textContent.length > 0) {
        container.textContent = container.textContent.slice(1);
    }
}

window.addEventListener("load", initializeContainer);

window.addEventListener("keyup", function(e) {
    console.log(e.key);
    
    // 如果輸入的字母與第一個字母匹配，則刪除它
    if (container.textContent.length > 0 && e.key === container.textContent[0]) {
        removeFirstChar();
    }

    // 無論如何都新增 1-3 個字母
    addNewChars();
});

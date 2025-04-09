const container = document.getElementById('container');
let wrongCount = 0; // 連續錯誤次數

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
    setTimeout(() => container.focus(), 100); // 確保獲得焦點
}

// 新增 1~3 個字元（一定會執行）
function addNewChars() {
    const newChars = getRandomString(3);
    container.textContent += newChars;
}

// 額外插入 6 個字元（錯誤 3 次時執行）
function addPenaltyChars() {
    const extra = getRandomString(6);
    container.textContent += extra;
}

// 移除第一個字元（打對時執行）
function removeFirstChar() {
    container.textContent = container.textContent.slice(1);
}

window.addEventListener("load", initializeContainer);

window.addEventListener("keyup", function(e) {
    console.log(e.key);
    const firstChar = container.textContent[0];

    if (firstChar && e.key === firstChar) {
        removeFirstChar();
        wrongCount = 0; // 打對歸零
    } else {
        wrongCount++; // 打錯累加
    }

    addNewChars(); // 不管打對打錯都會新增

    if (wrongCount >= 3) {
        addPenaltyChars(); // 額外懲罰字元
        wrongCount = 0;    // 錯誤次數歸零
    }
});

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
 }
 
 // keyup 時，增加新的字元
 function add_new_chars() {
     container.textContent += getRandomString(3);
 }
 
 // 移除第一個字元
 function removeFirstChar() {
     container.textContent = container.textContent.slice(1);
 }
 
 window.addEventListener("load", initializeContainer);
 
 window.addEventListener("keyup", function(e) {
     console.log(e.key);
     if (container.textContent.length > 0 && e.key === container.textContent[0]) {
         removeFirstChar();
     }
     add_new_chars();
 });
 
 container.focus(); // 確保 container 獲得焦點

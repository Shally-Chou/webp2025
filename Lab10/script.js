// 🆕 Flickr 的 API：先拿最近的圖片資訊
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

// 🆕 拿指定 id 的圖片真實網址
var img_Url_base = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&format=json&nojsoncallback=1&photo_id=';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true); // 只改這裡的網址
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        var photos = data.photos.photo; // 取出照片陣列

        // 一張張去抓真實圖片網址
        photos.forEach(function (item) {
            getImageUrl(item.id); // 傳入每張圖的 photo_id
        });
    };
}

function getImageUrl(photo_id) {
    var url = img_Url_base + photo_id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        var sizes = data.sizes.size;

        // 找一個適合的尺寸（例如 medium 或 medium640）
        var imgsrc = '';
        for (var i = 0; i < sizes.length; i++) {
            if (sizes[i].label === 'Medium' || sizes[i].label === 'Medium 640') {
                imgsrc = sizes[i].source;
                break;
            }
        }

        if (imgsrc !== '') {
            var gal = document.getElementById("gallery");
            var img = document.createElement("img");
            img.setAttribute("src", imgsrc);
            gal.appendChild(img);
        }
    };
}

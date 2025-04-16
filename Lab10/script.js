var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true); // ⭐ 改成 Flickr 的 URL
    xhr.send();
    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        add_new_img(data); // 傳入 Flickr 資料
    }
}

function add_new_img(dataset) {
    var gal = document.getElementById("gallery");

    dataset.photos.photo.forEach(function(photo){ // ⭐ Flickr 資料格式要這樣取
        var img = document.createElement("img");

        // ⭐ Flickr 圖片網址格式：
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_m.jpg
        var src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

        img.setAttribute("src", src);
        gal.appendChild(img);
    });
}


/*var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1'; 
var img_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';

function getimg(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataUrl, true);
    xhr.send();
    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        add_new_img(data);
    }
}

function add_new_img(dataset){
    var gal = document.getElementById("gallery");
    dataset.forEach(function(item){
        console.log(item);
        var img = document.createElement("img");
        img.setAttribute("src", item.urls.small);
        gal.appendChild(img); 
    });
}*/
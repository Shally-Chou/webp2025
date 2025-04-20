let dataset = [];
let filteredData = [];
let currentPage = 1;
const itemsPerPage = 10;

const tableBody = document.querySelector("#csie tbody");
const pageInfo = document.getElementById("pageInfo");

function fetchData() {
    const url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dataset = JSON.parse(this.responseText);
            filteredData = dataset; // 初始狀態沒搜尋
            renderTable();
        }
    };
}

function renderTable() {
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const pageData = filteredData.slice(start, start + itemsPerPage);

    pageData.forEach(data => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = data['title'];
        row.insertCell(1).textContent = data['showInfo'][0]?.location || '無資料';
        row.insertCell(2).textContent = data['showInfo'][0]?.price || '免費';
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
    pageInfo.textContent = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

function searchData() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    filteredData = dataset.filter(item => item.title.toLowerCase().includes(keyword));
    currentPage = 1; // 搜尋後從第一頁開始
    renderTable();
}

fetchData();

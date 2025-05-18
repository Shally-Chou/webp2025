import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./App.css";

const columns = [
  { field: "id", headerName: "編號", width: 90 },
  { 
    field: "title", 
    headerName: "名稱", 
    width: 250,
    cellClassName: 'cell-text-ellipsis' 
  },
  { 
    field: "location", 
    headerName: "地點", 
    width: 250,
    cellClassName: 'cell-text-ellipsis'
  },
  { 
    field: "price", 
    headerName: "票價", 
    width: 120,
    renderCell: (params) => (
      params.value === '免費' ? 
        <span style={{color: '#04AA6D', fontWeight: 'bold'}}>免費</span> : 
        params.value
    )
  },
];

function App() {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo[0]?.location || "無資料",
          price: item.showInfo[0]?.price || "免費",
        }));
        setRows(formatted);
      });
  }, []);

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const pageRows = filteredRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-container">
      <h1><b>景點觀光展覽資訊</b></h1>

      <input
        type="text"
        id="searchInput"
        placeholder="輸入名稱關鍵字搜尋"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />

      <div style={{ height: 'auto', width: "100%", marginTop: "10px" }}>
        <DataGrid
          rows={pageRows}
          columns={columns}
          disableColumnMenu
          hideFooter
          rowHeight={34}
          headerHeight={44}
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#04AA6D',
              color: 'white',
              fontSize: '16px',
              borderBottom: '1px solid #ddd',
              fontWeight: 'bold',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              textAlign: 'left',
              paddingLeft: '6px'
            },
            '& .MuiDataGrid-cell': {
              border: '1px solid #ddd',
              padding: '6px',
              fontSize: '16px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              '&:focus': {
                outline: 'none'
              }
            },
            '& .MuiDataGrid-row': {
              maxHeight: '34px !important',
              '&:nth-of-type(even)': {
                backgroundColor: '#f2f2f2',
              },
              '&:hover': {
                backgroundColor: '#ddd',
                transition: '0.3s'
              }
            },
            '& .MuiDataGrid-virtualScroller': {
              overflow: 'visible',
              minHeight: '340px'
            },
            '& .MuiDataGrid-main': {
              border: '1px solid #ddd',
            }
          }}
        />
      </div>

      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          上一頁
        </button>
        <button 
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          下一頁
        </button>
        <span className="page-info">
          第 {currentPage} 頁 / 共 {totalPages || 1} 頁
        </span>
      </div>
    </div>
  );
}

export default App;


/*import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./App.css";

const columns = [
  { field: "id", headerName: "編號", width: 90 },
  { 
    field: "title", 
    headerName: "名稱", 
    width: 250,
    cellClassName: 'cell-text-ellipsis'  // 新增文字截斷樣式
  },
  { 
    field: "location", 
    headerName: "地點", 
    width: 250,
    cellClassName: 'cell-text-ellipsis'
  },
  { 
    field: "price", 
    headerName: "票價", 
    width: 120,
    renderCell: (params) => (  // 價格格式化
      params.value === '免費' ? 
        <span style={{color: '#04AA6D', fontWeight: 'bold'}}>免費</span> : 
        params.value
    )
  },
];

function App() {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo[0]?.location || "無資料",
          price: item.showInfo[0]?.price || "免費",
        }));
        setRows(formatted);
      });
  }, []);

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const pageRows = filteredRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-container">
      <h1><b>景點觀光展覽資訊</b></h1>

      <input
        type="text"
        id="searchInput"
        placeholder="輸入名稱關鍵字搜尋"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />

      <div style={{ height: 'auto', width: "100%", marginTop: "10px" }}>
        <DataGrid
          rows={pageRows}
          columns={columns}
          disableColumnMenu
          hideFooter
          rowHeight={34}  // 精準匹配原始行高
          headerHeight={44}  // 表頭高度調整
          sx={{
            '& .MuiDataGrid-main': {
              border: '1px solid #ddd',  // 外框線
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#04AA6D',
              color: 'white',
              fontSize: '16px',
              borderBottom: '1px solid #ddd',
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 'bold',
                textAlign: 'left',
                paddingLeft: '6px'
              }
            },
            '& .MuiDataGrid-cell': {
              border: '1px solid #ddd',
              padding: '6px',
              fontSize: '16px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              '&:focus': {
                outline: 'none'  // 移除聚焦框線
              }
            },
            '& .MuiDataGrid-row': {
              maxHeight: '34px !important',
              '&:nth-of-type(even)': {
                backgroundColor: '#f2f2f2',
              },
              '&:hover': {
                backgroundColor: '#ddd',
                transition: '0.3s'
              }
            },
            '& .MuiDataGrid-virtualScroller': {
              overflow: 'visible',
              minHeight: '340px'  // 最小高度保持版面穩定
            }
          }}
        />
      </div>

      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          上一頁
        </button>
        <button 
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          下一頁
        </button>
        <span className="page-info">
          第 {currentPage} 頁 / 共 {totalPages || 1} 頁
        </span>
      </div>
    </div>
  );
}

export default App;*/
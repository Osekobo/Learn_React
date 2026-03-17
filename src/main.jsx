import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// index.html → has root div=screen
// main.jsx → connects React to root div=Entry point
// App.jsx → contains your UI/pages=layout/routing
//App → Page → Components
// main.jsx → mounts App
// App.jsx → shows Products page
// Products.jsx → shows ProductsTable component
// ProductsTable.jsx → renders UI

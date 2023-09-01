import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Error404 from './routes/Error404.jsx'

const router = createBrowserRouter([

  {path: '/', element: <App/>,
    errorElement: <Error404/>,
    children:[
      {path: '/', element: <Home/>}, 
      {path: '/produtos', element: <Produtos/>}, 
      {path: '/editar/produtos/:id', element: <EditarProdutos/>}, 
      
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router}/>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './page/App.tsx'
import './assets/global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PagePost from './page/PagePost.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post",
    element: <PagePost />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

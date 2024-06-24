import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PagePost from './page/PagePost.tsx'
import Layout from './layout/Layout.tsx'
import App from './page/App.tsx'
import { data } from './data/data.ts'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'post/:id',
        element: <PagePost items={data} />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

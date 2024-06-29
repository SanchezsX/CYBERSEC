import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PagePost from './page/PagePost.tsx'
import Layout from './layout/Layout.tsx'
import App from './page/App.tsx'

const router = createBrowserRouter([
  {
    path: '/CYBERSEC/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/CYBERSEC/post/:id',
        element: <PagePost />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

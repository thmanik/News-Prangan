import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Error.jsx'

const router = createBrowserRouter([
  {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
          {
            path:"/",
            element:"fdf",

          }
        ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

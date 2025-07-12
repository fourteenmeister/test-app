import { RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

import { createRouter } from './router'

const router = createRouter()

const rootElement = document.getElementById('root')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}

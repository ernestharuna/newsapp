import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/_base.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

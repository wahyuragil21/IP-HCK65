import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
    </Provider>
  </React.StrictMode>,
)


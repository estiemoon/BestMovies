import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginBox from './login'
import RegisterBox from './register'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/register" element={<RegisterBox />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)

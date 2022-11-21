import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import store from './store'

import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Hello world</div>}/>
        <Route path="/todos" element={<div>Todos</div>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)

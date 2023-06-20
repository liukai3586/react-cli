import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container!)

root.render(<Provider store={store}>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
</Provider>)
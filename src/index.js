import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import FastClick from 'fastclick'
import './common/style/index'
import store from './store/index'
FastClick.attach(document.body)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)



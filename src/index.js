import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import FastClick from 'fastclick'
import './common/style/index'
import store from './store/index'

FastClick.attach(document.body)

function render () {
  ReactDom.render(<App store={store}/>, document.getElementById('app'))
}
render()

store.subscribe(render)


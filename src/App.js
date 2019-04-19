import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import {add} from './store/actions'

class App extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.store)
    this.click = this.click.bind(this)
    this.store = this.props.store
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Button>button</Button>
        <div onClick={this.click}>{this.store.getState()}</div>
      </div>
    )
  }
  click () {
    this.store.dispatch(add())
    console.log(this.store.getState())
  }
}

export default App

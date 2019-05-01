import React, { Component } from 'react'
import TemperatureInput from './componets/TempereatureInput'
import {connect} from 'react-redux'
import * as actionsCreator from './store/actions'

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {num: state}
}

// App = connect(mapStatetoProps, actionsCreator)(App) 普通写法
@connect(mapStatetoProps, actionsCreator)//装饰器写法
class App extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.addAsync = this.props.addAsync
  }
  handleClick () {
    this.addAsync()
    console.log('portal')
  }
  render() {
    let t = 1
    const num = this.props.num
    return (
      <div onClick={this.handleClick}>
        <h1>{num}</h1>
        <WelcomeDialog />
        <TemperatureInput message='&' num='1' num1={{t}}/>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import TemperatureInput from './componets/TempereatureInput'

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
  console.log(props)
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    let t = 1
    return (
      <div>
        <WelcomeDialog />
        <TemperatureInput message='\\' num='1' num1={{t}}/>
      </div>
    )
  }
}

export default App

import React from 'react'

class TempereatureInput extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.message)
    console.log(typeof this.props.num)
    console.log(typeof this.props.num1)
    console.log(this.props.num1)
    return (
      <h1>TemperatureIput</h1>
    )
  }
}

let a = new TempereatureInput
console.log(33333)
// console.log(a.render())
console.log(1)

export default TempereatureInput
import React from 'react'
import ReactDOM from 'react-dom'

class TempereatureInput extends React.Component {
  // constructor (props) {
  //   // super(props)
  //   super()
  //   this.el = document.getElementById('app')
  //   console.log(1)
  //   console.log(this)
  // }
  
  render () {
    let x = React.createElement('div', {className: 'aaa'}, 'what happen')
    
    const arr = [1,2,3,4,5]
    // return (
    //   <ul>
    //     {arr.map(element => <li key={element}>{element}</li>
    //     )}
    //   </ul>
    // )
    let el = document.getElementById('app')
    // console.log(ReactDOM.createPortal(x, el))
    ReactDOM.createPortal(x, el)
    return ReactDOM.createPortal(x, el)
  }
}

export default TempereatureInput
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random(1, 100) * 100)
    this.setState(prevState => ({number: prevState.number + randomNum}))
  }

  render() {
    const {number} = this.state
    let value
    if (number % 2 !== 0) {
      value = 'Odd'
    } else {
      value = 'Even'
    }
    return (
      <div className="container">
        <h1>Count {number}</h1>
        <div className="internal-container">
          <p>Count is {value}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

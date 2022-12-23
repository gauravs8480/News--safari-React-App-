import React, { Component } from 'react'
import loading from './duck.gif'
export  class Loader extends Component {
  render() {
    return (
      <div>
<img src={loading} alt="loading" />
      </div>
    )
  }
}
export default Loader
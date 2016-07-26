import React, { Component } from 'react'
import {
  FirstComponent
} from '../components'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FirstComponent />
      </div>
    )
  }
}

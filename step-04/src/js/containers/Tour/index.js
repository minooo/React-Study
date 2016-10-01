import React, { Component } from 'react'
import { Nav } from '../../components'
import { Todos } from '../../components'

export default class Tour extends Component {
  render() {
    return (
      <div>
        <Todos/>
        <Nav />
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Nav, Header, SelectMenu } from '../../components'

export default class Shop extends Component {
  render() {
    return (
      <div className="box">
        <Header />
        <SelectMenu/>
        <Nav />
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Nav } from '../../components'
export default class User extends Component {
  state = {
    info: 'hello'
  }

  componentDidMount(){
    this.setState({info: 'minooo'})
  }
  render() {
    return (
      <div>
        {this.state.info}
        <Nav />
      </div>
    )
  }
}
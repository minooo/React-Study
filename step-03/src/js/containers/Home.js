import React,{ Component } from 'react'
import { SearchBar, NavBar, Icon } from 'antd-mobile'
import { Header, Nav } from '../components'

class Home extends Component {
  state = {
    dark: false
  }
  
  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    )
  }
}

export default Home
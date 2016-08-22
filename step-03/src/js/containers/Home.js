import React,{ Component } from 'react'
import { SearchBar, NavBar, Icon } from 'antd-mobile'
import { Header } from '../components'

class Home extends Component {
  state = {
    dark: false
  }
  
  render() {
    return (
      <div className="pageAnimate">
        <Header />
      </div>
    )
  }
}



export default Home
/*组件模板*/
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

class Tem extends Component {
  render() {
    return (
      <h1 styleName="something">hello</h1>
    )
  }
}

/*如果是无状态组件就用下面的形式*/
/*const Tem = ({}) => {
  return (
    <h1>hello</h1>
  )
};*/

export default CSSModules(Tem, styles);


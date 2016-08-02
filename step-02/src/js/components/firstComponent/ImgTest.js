import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './FirstComponent.scss'

class ImgTest extends Component {
  render() {
    return (
      <div>
        <div styleName="smallBg"></div>
        <div styleName="bigBg"></div>
      </div>
    )
  }
}

export default CSSModules(ImgTest, styles);


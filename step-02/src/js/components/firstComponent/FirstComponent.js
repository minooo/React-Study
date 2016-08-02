import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './FirstComponent.scss'

import CssTest from './CssTest'
import ImgTest from './ImgTest'

class FirstComponent extends Component {
  
  render() {
    return (
      <div>
        <CssTest />
        <ImgTest />
      </div>
    )
  }
}

export default CSSModules(FirstComponent, styles);


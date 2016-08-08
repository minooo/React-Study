/*组件模板*/
import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

/*class Link extends Component {
  render() {
    const { pathUrl, icoName, linkName, ...rest } = this.props;
    return (
      <Link
        {...rest}
        to={pathUrl}
        activeClassName="active"
        className="navColor"
        styleName="root"
      >
        <i
          className={icoName}
          styleName="navIco"
        />
        <span styleName="navText">{linkName}</span>
      </Link>
    )
  }
}*/

const Link = ({pathUrl, icoName, linkName, ...rest}) => {
  return (
    <Link
      {...rest}
      to={pathUrl}
      activeClassName={styles.active}
      className="navColor"
      styleName="root"
    >
      <i
        className={icoName}
        styleName="ico"
      />
      <span styleName="text">{linkName}</span>
    </Link>
  )
};

/*如果是无状态组件就用下面的形式*/
/*const Z = ({}) => {
 return (
 <h1>hello</h1>
 )
 };*/

export default CSSModules(Link, styles);


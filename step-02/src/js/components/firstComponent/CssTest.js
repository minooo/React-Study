/*
import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './FirstComponent.scss'

class CssTest extends Component {
  state = {
    nihao: false
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({nihao: !this.state.nihao})
    console.log(this.state.nihao)
  };

  render() {

    const cx = classNames({
      toYellow: this.state.nihao,
      toRed2: !this.state.nihao
    });

    return (
      <div>
        <div styleName={cx}>sdf</div>
        <a href="" styleName="toRed" onClick={this.handleClick}>点击我吧！</a>
        <div className={styles.myDiv}>条件判断</div>
        <div className={styles.myDiv2}>test2</div>
        <div className={styles.search}>test2</div>
        <div className={styles.noticeGlear}>test23333</div>
        <input type="text" placeholder="nihao"/>
        <ul className={styles.myUl}>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
          <li>nihao</li>
        </ul>
      </div>
    )
  }
}

export default CSSModules(CssTest, styles);

*/

import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './FirstComponent.scss'

class CssTest extends Component {
  state = {
    myArray: [
      {name: '111'},
      {name: '222'},
      {name: '333'},
      {name: '444'}
    ],
    selected:0
  };

  handleClick = (i) => {
    this.setState({
      selected: i
    })
  };

  render() {
    const {myArray,selected} = this.state;
    return (
      <div>
        <ul>
          {myArray.map((item, index) =>
            <li
              key={index}
              onClick={this.handleClick.bind(null,index)}
              className={index === selected?(styles.toYellow):(styles.toRed2)}>
              {item.name}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default CSSModules(CssTest, styles);


import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './index.scss'

class CssTest extends Component {
  state = {
    nihao: false
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({nihao: !this.state.nihao});
    console.log(this.state.nihao)
  };

  render() {

    const cx = classNames({
      toYellow: this.state.nihao,
      toRed2: !this.state.nihao
    });

    return (
      <div className="mb20">
        <div styleName="nihaoa">我是按钮</div>
        <div className="wohao center-center">我是按钮</div>
        <div styleName={cx}>sdf</div>
        <a href="" styleName="btn" onClick={this.handleClick}>点击我吧！</a>
        <div styleName="myDiv">条件判断</div>
        <div styleName="myDiv2">test2</div>
        <div styleName="search">test2</div>
        <div styleName="noticeGlear">test23333</div>
        <input type="text" placeholder="nihao"/>
        <ul styleName="myUl">
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
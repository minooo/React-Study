
import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './index.scss'

class Tab extends Component {
  state = {
    focused: 0
  };

  handleClick = (index) => {
    this.setState({focused: index})
  };

  render() {
    const { items } = this.props;
    const { focused } = this.state;
    const cx = classNames({
      focused: this.state.nihao,
      toRed2: !this.state.nihao
    });

    return (
      <div className="mb20 text-center">
        <ul styleName="root">
          {items.map((item, index) =>
            <li
              key={index}
              styleName={focused === index ? 'focused' : 'normal'}
              onClick={this.handleClick.bind(null, index)}
            >
              {item}
            </li>
          )}
        </ul>
        <p className="pt20">当前选择是：{items[this.state.focused]}</p>
      </div>
    )
  }
}

export default CSSModules(Tab, styles);
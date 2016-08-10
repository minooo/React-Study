import React, { Component } from 'react'
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

    return (
      <div className="mb20 text-center">
        <ul className={styles.root}>
          {items.map((item, index) =>
            <li
              key={index}
              className={focused === index ? styles.focused : styles.normal}
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

export default Tab
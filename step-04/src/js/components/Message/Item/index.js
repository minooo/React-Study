import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './index.scss'
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: 0 };
    this.interval = setInterval(() => this.tick(), 2000);
  }

  tick() {
    let nowFocus = this.state.focus+1>=this.props.data.length?0:this.state.focus+1
    this.setState({
      focus: nowFocus
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      data
    } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="message"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {data.map((item, index) => {
          if(this.state.focus === index) {
            return (
              <a
                key={index}
                href={item.link}
                className={`text-overflow-1 ${styles.root}`}
              >
                {item.desc}
              </a>
            )
          }
        })}
      </ReactCSSTransitionGroup>
    )
  }
}
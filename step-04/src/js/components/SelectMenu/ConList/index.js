import React, { Component } from 'react'
import styles from './index.scss'

class Item extends Component {
  onSelectHandle = () => {
    this.props.selectHandle(this.props.label, this.props.flag)
  }
  render() {
    const { label, activeBool, SonBool } = this.props
    return (
      <a
        href="javascript:void(0)"
        onClick={this.onSelectHandle}
        className={`ver-center ${styles.list} ${activeBool ? styles.active:null} ${SonBool ? styles.sonActive :null}`}
      >
        {label}
      </a>
    )
  }
}

export default class ConList extends Component {
  state = {
    focus: -1
  }
  onClickFocus = (label,flag) => {
    this.setState({focus: flag})
  }

  render() {
    const { items, selectHandle } = this.props
    const { focus } = this.state
    return (
      <div>
        <div className={styles.root}>
          <div className={styles.left}>
            {items.map((item, index) =>
              <Item
                {...item}
                key={index}
                flag={index}
                SonBool={!(item.items && index===focus)}
                activeBool={item.items && index===focus}
                selectHandle={item.items ? this.onClickFocus : selectHandle}
              />
            )}
          </div>

          {items.map((item, index) =>
            item.items && index===focus &&
            <div key={index} className={styles.right}>
              {item.items.map((item, index) =>
                <Item
                  {...item}
                  key={item.label}
                  SonBool
                  selectHandle={selectHandle}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

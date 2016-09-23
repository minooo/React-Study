import React, { Component } from 'react'
import styles from './index.scss'

const Item = ({label, selectHandle, activeBool, SonBool}) => {
  return (
    <a
      href="javascript:void(0)"
      onClick={selectHandle}
      className={`ver-center ${styles.list} ${activeBool ? styles.active:null} ${SonBool ? styles.sonActive :null}`}
    >
      {label}
    </a>
  )
}

export default class ConList extends Component {
  state = {
    focus: -1
  }
  onClickFocus = (i) => {
    this.setState({focus: i})
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
                SonBool={!(item.items&&index===focus)}
                activeBool={item.items&&index===focus}
                selectHandle={item.items ? this.onClickFocus.bind(null, index, item) : () => selectHandle(item.label)}
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
                  selectHandle={() => selectHandle(item.label)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

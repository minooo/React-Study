import React, { Component } from 'react'
import styles from './index.scss'

const Item = ({label, onClick, activeBool, SonBool}) => {
  return (
    <a
      href="javascript:void(0)"
      onClick={() => onClick()}
      className={`ver-center ${styles.list} ${activeBool ? styles.active:null} ${SonBool ? styles.sonActive :null}`}
    >
      {label}
    </a>
  )
}

export default class ConList extends Component {
  state = {
    focus: 0
  }
  onClickFocus = (i) => {
    this.setState({focus: i})
  }
  render() {
    const { type, items, onClick } = this.props
    const { focus } = this.state
    return (
      <div>
        {
          type === 'multi' ?

            <div className={styles.conMulti}>
              <div className={styles.left}>
                {
                  items.map((item, index) =>
                    <Item
                      {...item}
                      activeBool={index === focus}
                      onClick={this.onClickFocus.bind(null, index)}
                    />
                  )
                }
              </div>
              <div className={styles.right}>
                {
                  items[focus].items.map(item =>
                    <Item {...item} SonBool onClick={() => onClick()} />
                  )
                }
              </div>
            </div> :

            <div className={styles.root}>
              {
                items.map(item =>
                  <Item {...item} SonBool onClick={() => onClick()}/>
                )
              }
            </div>
        }

      </div>
    )
  }
}

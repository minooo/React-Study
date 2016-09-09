import React, { Component } from 'react'
import styles from './index.scss'
import TopList from './TopList'
import ConList from './ConList'

export default class SelectMenu extends Component {
  state = {
    filters:[
      {
        activeBool: false,
        key: 'cid',
        label: '分类',
        items: [
          {
            key: 0,
            label: '全部分类'
          },{
            key: 1,
            label: '住宿'
          },{
            key: 2,
            label: '美食'
          },{
            key: 3,
            label: '旅游'
          }
        ]
      },{
        activeBool: false,
        key: 'bid',
        label: '商圈',
        items: [
          {
            key: 0,
            label: '全部分类2'
          },{
            key: 1,
            label: '住宿2'
          },{
            key: 2,
            label: '美食2'
          },{
            key: 3,
            label: '旅游2'
          }
        ]
      },{
        activeBool: false,
        key: 'aid',
        label: '位置',
        type: 'multi',
        items: [
          {
            key: 0,
            label: '父级项目',
            items: [
              {
                key: 0,
                label: '子项目1'
              },{
                key: 1,
                label: '子项目2'
              },{
                key: 2,
                label: '子项目3'
              }
            ]
          },{
            key: 1,
            label: '父级项目222',
            items: [
              {
                key: 0,
                label: '子项目11'
              },{
                key: 1,
                label: '子项目22'
              },{
                key: 2,
                label: '子项目33'
              }
            ]
          },{
            key: 2,
            label: '父级项目333',
            items: [
              {
                key: 0,
                label: '子项目111'
              },{
                key: 1,
                label: '子项目222'
              },{
                key: 2,
                label: '子项目333'
              }
            ]
          }
        ]
      }
    ],
    isExpend:false
  }
  handleClick = (key) => {
    let filters = this.state.filters
    filters.map(item => {
      if (key === item.key) {
        item.activeBool = !item.activeBool
      } else {
        item.activeBool = false
      }
      }
    )
    this.setState({
      isExpend: filters.some(item => {return item.activeBool}),
      filters: filters
    })
  }
  hideHandle = () => {
    let filters = this.state.filters
    filters.map(item => {
      item.activeBool = false
    });
    this.setState({isExpend : false});
  }
  onClick = () => {
    alert(111)
  }
  render() {
    const { filters, isExpend } = this.state
    return (
      <div className="relative">
        <div className={`center-center bg-white relative z-150 ${styles.nav}`}>
          {filters.map(item =>
            <TopList
              {...item}
              onClick={this.handleClick.bind(null, item.key)}
            />)
          }
        </div>
        {isExpend && filters.map((cate) =>
          cate.activeBool &&
          <ConList {...cate} onClick={this.onClick}/>
        )}

        {isExpend && <div onClick={this.hideHandle} className="alpha-bg"></div>}
      </div>
    )
  }
}
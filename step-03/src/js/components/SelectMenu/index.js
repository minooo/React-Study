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
            label: '全部分类'
          },{
            label: '住宿'
          },{
            label: '美食'
          },{
            label: '旅游'
          }
        ]
      },{
        activeBool: false,
        key: 'bid',
        label: '商圈',
        items: [
          {
            label: '全部分类2'
          },{
            label: '住宿2'
          },{
            label: '美食2'
          },{
            label: '旅游2'
          }
        ]
      },{
        activeBool: false,
        key: 'aid',
        label: '位置',
        items: [
          {
            label: '父级项目',
            items: [
              {
                label: '子项目1'
              },{
                label: '子项目2'
              },{
                label: '子项目3'
              }
            ]
          },{
            label: '父级项目222',
            items: [
              {
                label: '子项目11'
              },{
                label: '子项目22'
              }
            ]
          },{
            label: '父级项目333',
            items: [
              {
                label: '子项目111'
              },{
                label: '子项目222'
              },{
                label: '子项目333'
              },{
                label: '子项目444'
              },{
                label: '子项目555'
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
      if (key === item.label) {
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
  selectHandle = (item) => {
    alert(`当前点击的是: ${item}`)
  }
  render() {
    const { filters, isExpend } = this.state
    return (
      <div className="relative">
        <div className={`center-center bg-white relative z-150 ${styles.nav}`}>
          {filters.map(item =>
            <TopList
              {...item}
              onClick={this.handleClick}
            />)
          }
        </div>
        {isExpend && filters.map((cate) =>
          cate.activeBool &&
          <ConList {...cate} selectHandle={this.selectHandle}/>
        )}

        {isExpend && <div onClick={this.hideHandle} className="alpha-bg"></div>}
      </div>
    )
  }
}
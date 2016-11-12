/*
import React, { Component } from 'react'
import { Nav, Post, ScrollBox } from 'app/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from 'app/actions/PostActions'

const options = {
  click:true,
  scrollY: true,
  probeType:3,
}

class User extends Component {
  state = {
    isReload:false,
    isRefreshDown:false,
    isCancelRefresh:false
  }
  componentDidMount(){
    this.props.actions.onRequestPosts()
  }

  onScrollStart= (e) => {
    /!*e.y < e.maxScrollY + 80*!/
    /!*let Y = e.y
    if (Y > 100) {
      console.log('放手！实现了！！！')
    }*!/
  }

  onScroll = (e) => {
    let Y = e.y

    !this.props.state.isFetching && !this.state.isRefreshDown && Y >= 60 && this.setState({
      isReload: true,
      isRefreshDown: true,
      isCancelRefresh: false
    })

    !this.props.state.isFetching && this.state.isRefreshDown && Y < 0 && this.setState({
      isReload: false,
      isCancelRefresh: true
    })

  }
  onTouchEnd = () => {
    this.state.isReload && console.log('放手！！实现了！！！')

    !this.props.state.isFetching && !this.state.isCancelRefresh && this.state.isRefreshDown &&
    setTimeout(() => {
      this.setState({isRefreshDown:false});
      this.props.actions.onRequestPosts()
    }, 600)

    !this.props.state.isFetching && this.state.isCancelRefresh && this.setState({isRefreshDown:false})
  }

  render() {
    const { state, actions } = this.props
    const { isRefreshDown } = this.state
    return (
      <div className="box">
        <ScrollBox
          options={options}
          style={{
            position: 'absolute',
            width:'100%',
            maxWidth: '10rem',
            top: 0,
            bottom: '1rem',
            background:'#f2f2f2',
            overflow: 'hidden'
          }}
          onScroll={this.onScroll}
          onTouchEnd={this.onTouchEnd}
          onScrollStart={this.onScrollStart}
        >
          <Post
            {...state}
            {...actions}
            isRefreshDown={isRefreshDown}
          />
        </ScrollBox>
        <Nav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)*/


import React, { Component } from 'react'
import { Nav } from 'app/components'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from 'app/actions/PostActions'

class User extends Component {
  state = {
    scrollReloadHeight:0,
    pullReload:false,
    go:false,
    scrollOptions: {
      click:true,
      scrollY: true,
      probeType:3
    }
  }
  componentDidMount(){
    console.log(this.refs.scrollReload.offsetHeight)
    this.setState({scrollReloadHeight:this.refs.scrollReload.offsetHeight})
  }

  onScrollStart= (e) => {
    /*e.y < e.maxScrollY + 80*/
    /*let Y = e.y
     if (Y > 100) {
     console.log('放手！实现了！！！')
     }*/
  }

  onScroll = (e) => {
    let Y = e.y, scrollReloadHeight = this.state.scrollReloadHeight

    if(Y>0) {this.setState({go:true})} else {this.setState({go:false})}

    if(Y>=scrollReloadHeight) {
      this.setState({pullReload:true})
    }else if( 0< Y < scrollReloadHeight) {
      this.setState({pullReload:false})
    }


  }
  onTouchEnd = () => {
    this.setState({scrollOptions:{...this.state.scrollOptions, startY:this.state.scrollReloadHeight}})
  }

  onFlick = () => {
    console.log('说是弹动。。。')
  }

  _handleScrollRefresh = (iScrollInstance) => {

      this.state.go && this.refs.iScroll.withIScroll((iScroll) => {
        iScroll.scrollTo(0, this.state.scrollReloadHeight)
      })

  }

  render() {
    const { state, actions } = this.props
    const { pullReload,scrollOptions } = this.state

    let i = 0, len = 70, listOfLi = []

    for(i; i < len; i++) {
      listOfLi.push(<li ref={"list" + i} key={i} className="ptb20 center-center border-bottom">Row {i+1}</li>)
    }

    return (
      <div className="box">
        <ReactIScroll
          iScroll={iScroll}
          ref="iScroll"
          options={scrollOptions}
          style={{
            position: 'absolute',
            width:'100%',
            maxWidth: '10rem',
            top: 0,
            bottom: '1rem',
            background:'#f2f2f2',
            overflow: 'hidden'
          }}
          onRefresh={this._handleScrollRefresh}
          onScroll={this.onScroll}
          onTouchEnd={this.onTouchEnd}
          onScrollStart={this.onScrollStart}
          onFlick={this.onFlick}

        >
          <div className="relative" style={{background:'tomato'}}>
            <div
              style={{
                position: 'absolute',
                width:'100%',
                top: '-0.6rem',
                height:'0.6rem',
                background:!pullReload?'yellow':'blue'
              }}
              ref="scrollReload"
              className="center-center"
            >{!pullReload?'下拉刷新':"放手刷新"}</div>
            {listOfLi}
          </div>
        </ReactIScroll>
        <Nav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
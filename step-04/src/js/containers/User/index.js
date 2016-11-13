import React, { Component } from 'react'
import { Nav, Post } from 'app/components'
import { Icon } from 'antd-mobile'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
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
      probeType:2
    }
  }

  componentDidMount(){
    this.props.actions.onRequestPosts()
    this.setState({scrollReloadHeight:this.refs.scrollReload.offsetHeight})
  }

  onScroll = (e) => {
    let
      Y = e.y,
      scrollReloadHeight = this.state.scrollReloadHeight

    if(Y>0) {this.setState({go:true})} else {this.setState({go:false})}

    if(Y>scrollReloadHeight) {
      this.setState({pullReload:true})
    }else if( 0< Y <= scrollReloadHeight) {
      this.setState({pullReload:false})
    }
  }

  onTouchEnd = () => {
    this.state.pullReload && (
      this.setState({
        pullReload:false,
        go:false,
        scrollOptions:{...this.state.scrollOptions}
      }),
      this.props.actions.onRequestPosts()
    )
  }

  onRefresh = () => {
    this.state.go && this.refs.iScroll.withIScroll((iScroll) => {
        iScroll.scrollTo(0, this.state.scrollReloadHeight)
      })
  }

  render() {
    const { state, actions } = this.props
    const { pullReload,scrollOptions } = this.state

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
          onRefresh={this.onRefresh}
          onScroll={this.onScroll}
          onTouchEnd={this.onTouchEnd}
        >
          <div
            className={classnames({
              'relative':true,
              'height100':state.isFetching,
              'minheight110':!state.isFetching
            })}
          >
            <div
              style={{
                position: 'absolute',
                width:'100%',
                top: '-0.9rem',
                height:'0.9rem'
              }}
              ref="scrollReload"
              className="center-center main-color font-28"
            >
              {
                !pullReload ?
                  <div>
                    <Icon type="arrow-down" />下拉刷新
                  </div> :
                  <div>
                    <Icon type="arrow-up" />放手刷新
                  </div>
              }
            </div>
            {
              state.isFetching &&
              <div
                style={{
                  height:'0.9rem',
                }}
                className="center-center main-color font-28"
              >
                <Icon type="loading" className="font-26" />&nbsp;&nbsp;加载中...
              </div>
            }
            <Post
              {...state}
              {...actions}
            />
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
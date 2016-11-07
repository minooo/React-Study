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
    /*e.y < e.maxScrollY + 80*/
    /*let Y = e.y
    if (Y > 100) {
      console.log('放手！实现了！！！')
    }*/
  }

  onScroll = (e) => {
    let Y = e.y

    !this.state.isRefreshDown && Y >= 60 && this.setState({
      isReload: true,
      isRefreshDown: true,
      isCancelRefresh: false
    })

    this.state.isRefreshDown && Y < 0 && this.setState({
      isReload: false,
      isCancelRefresh: true
    })

    console.log(Y)

  }
  onTouchEnd = () => {
    this.state.isReload && console.log('放手！！实现了！！！')
    !this.state.isCancelRefresh && this.state.isRefreshDown && setTimeout(() => this.setState({isRefreshDown:false}), 600)
    this.state.isCancelRefresh && this.setState({isRefreshDown:false})
  }

  render() {
    const { state, actions } = this.props
    const { isRefreshDown } = this.state
    return (
      <div>
        <ScrollBox
          options={options}
          style={{
            position: 'absolute',
            width:'100%',
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
)(User)
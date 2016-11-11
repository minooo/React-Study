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
)(User)
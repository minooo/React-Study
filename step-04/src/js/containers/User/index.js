import React, { Component } from 'react'
import { Nav, Post, ScrollBox } from 'app/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from 'app/actions/PostActions'

const options = {
  click:true,
  scrollY: true
}

class User extends Component {

  componentDidMount(){
    this.props.actions.onRequestPosts()
  }

  render() {
    const { state, actions } = this.props
    return (
      <div>
        <ScrollBox
          options={options}
          style={{
            position: 'absolute',
            width:'100%',
            top: 0,
            bottom: '1rem',
            background:'red',
            overflow: 'hidden'
          }}
        >
          <Post {...state} {...actions}/>
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
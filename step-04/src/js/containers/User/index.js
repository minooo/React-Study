import React, { Component } from 'react'
import { Nav, Post } from '../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from '../../actions/PostActions'

class User extends Component {

  componentDidMount(){

  }

  render() {
    const { state, actions } = this.props
    return (
      <div>
        <Post {...state} {...actions}/>
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
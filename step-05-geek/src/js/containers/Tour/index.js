import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, Todos } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

const Tour = ({todos, showCongratulation, actions}) => (
  <div className="box relative">
    <div
      style={{
        background: "rgb(86, 86, 86)",
        padding: '0 0.4rem 1rem',
        position:'fixed',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0
      }}
      className="center-center"
    >
      <Todos todos={todos} showCongratulation={showCongratulation} {...actions}/>
    </div>
    <Nav/>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos,
  showCongratulation: state.showCongratulation
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tour)
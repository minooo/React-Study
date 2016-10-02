import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, Todos } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

const Tour = ({todos, actions}) => (
  <div>
    <Todos todos={todos} addTodo={actions.addTodo}/>
    <Nav/>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tour)
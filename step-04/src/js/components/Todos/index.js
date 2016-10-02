import React, { Component } from 'react';
import Header from './Header'
import MainSection from './MainSection'

export default class Todos extends Component {
  render() {
    const { addTodo, todos } = this.props
    return (
      <div>
        <Header addTodo={addTodo}/>
        <MainSection todos={todos}/>
      </div>
    );
  }
}


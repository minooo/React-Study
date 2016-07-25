import React, { Component } from 'react';

export default class App extends Component {
  state = {
    names: [
      {name: '张学友'},
      {name: '刘德华'},
      {name: '郭富城'},
      {name: '黎明'}
    ]
  };

  render() {
    const {names} = this.state;
    return (
      <div>
        <ul>
          {
            names.map((item, index) =>
              <li key={index}>{item.name}</li>
            )
          }
        </ul>
        <h1 style={{ color: 'tomato' }}>
          Hello, world!
        </h1>
        <h2>添加一个</h2>
      </div>
    );
  }
}

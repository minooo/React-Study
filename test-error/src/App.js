/*import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.myColor }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

class Lists extends Component {
  state = {
    lists: [
      {name: '张学友'},
      {name: '刘德华'},
      {name: '郭富城'},
      {name: '黎明'}
    ]
  };

  render() {
    const {lists} = this.state;
    return (
      <ul>
        {
          lists.map((item, index) =>
            <li key={index}>我叫：{item.name}</li>
          )
        }
      </ul>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello, word</h1>
        <Lists />
        <Counter increment={100} myColor="red" />
      </div>
    );
  }
}*/

import React, { Component } from 'react';
import UsingStyleName from './UsingStyleName';
import UsingStylesProperty from './UsingStylesProperty';
import UsingStylesPropertyStyles from './UsingStylesProperty/custom.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <UsingStyleName />
        <UsingStylesProperty styles={UsingStylesPropertyStyles} />
      </div>
    )
  }
}

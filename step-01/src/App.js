/*import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

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
      <h1 style={{ color: this.props.color }}>
        Counter122 ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={10} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}*/

import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

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
      <h1 style={{ color: this.props.color }}>
        Counter122 ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export default class App extends Component {
  state = { 
    names: [
      {name: '123d'},
      {name: 'tom'},
      {name: 'james'},
      {name: 'minooo'}
    ] 
  };
    
  render() {
    const {names} = this.state;
    return (
      <div>
        {
          names.map((item, index) =>
            <h1 key={index}>{item.name}</h1>
          )
        }
        <Counter increment={10} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}

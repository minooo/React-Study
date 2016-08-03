import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'

class DataTest extends Component {
  state = {
    selected:0
  };

  handleClick = (i) => {
    this.setState({
      selected: i
    })
  };

  render() {
    const {selected} = this.state;
    const {myArray} = this.props;
    return (
      <div>
        <ul>
          {myArray.map((item, index) =>
            <li
              key={index}
              onClick={this.handleClick.bind(null,index)}
              styleName={index === selected ? 'toGreen' : 'toRed'}>
              {item.name}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default CSSModules(DataTest, styles);
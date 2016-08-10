import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './index.scss'

class Animation extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 2,
        name: 'react-router'
      },
      {
        id: 3,
        name: 'redux'
      },
      {
        id: 4,
        name: 'es2016'
      }
    ]
  };

  addItem = () => {
    let saySomething = prompt('随便填点什么吧');
    if(saySomething) {
      var newItems = this.state.items.concat([
        {
          name: saySomething,
          id: this.state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }]);
      this.setState({items: newItems});
    } else {alert('不能为空!')}
  };

  removeItem = (i) => {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    })
  };

  render() {
    return (
      <div className="center-center-column">
        <button
          className={"mb10 center-center " + styles.addBtn}
          onClick={this.addItem}
        >
          <i className="i-shoucang40 font-size-24 pr5" />点击添加
        </button>
        <div className="hor-center overflow-h">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.state.items.map((item, index) =>
              <div
                key={item.id}
                onClick={this.removeItem.bind(null, index)}
                className={"text-overflow-1 " + styles.item}
              >
                {item.name}
              </div>
            )}
          </ReactCSSTransitionGroup>
        </div>

      </div>
    )
  }
}

export default Animation;

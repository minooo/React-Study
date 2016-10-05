import React, { Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import styles from './index.scss'


var touchFunc = function(obj,type,func) {
  //滑动范围在5x5内则做点击处理，s是开始，e是结束
  var init = {x:5,y:5,sx:0,sy:0,ex:0,ey:0};
  var sTime = 0, eTime = 0;
  type = type.toLowerCase();

  obj.addEventListener("touchstart",function(){
    sTime = new Date().getTime();
    init.sx = event.targetTouches[0].pageX;
    init.sy = event.targetTouches[0].pageY;
    init.ex = init.sx;
    init.ey = init.sy;
    if(type.indexOf("start") != -1) func();
  }, false);

  obj.addEventListener("touchmove",function() {
    event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
    init.ex = event.targetTouches[0].pageX;
    init.ey = event.targetTouches[0].pageY;
    if(type.indexOf("move")!=-1) func();
  }, false);

  obj.addEventListener("touchend",function() {
    var changeX = init.sx - init.ex;
    var changeY = init.sy - init.ey;
    if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>init.y) {
      //左右事件
      if(changeX > 0) {
        if(type.indexOf("left")!=-1) func();
      }else{
        if(type.indexOf("right")!=-1) func();
      }
    }
    else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>init.x){
      //上下事件
      if(changeY > 0) {
        if(type.indexOf("top")!=-1) func();
      }else{
        if(type.indexOf("down")!=-1) func();
      }
    }
    else if(Math.abs(changeX)<init.x && Math.abs(changeY)<init.y){
      eTime = new Date().getTime();
      //点击事件，此处根据时间差细分下
      if((eTime - sTime) > 300) {
        if(type.indexOf("long")!=-1) func(); //长按
      }
      else {
        if(type.indexOf("click")!=-1) func(); //当点击处理
      }
    }
    if(type.indexOf("end")!=-1) func();
  }, false);
};


export default class TodoItem extends Component {
  state = {
    btnsShow: false
  }

  componentDidMount() {
    var leftEvent = () => {this.setState({btnsShow: true})}
    touchFunc(this.refs.label, 'left', leftEvent)
  }

  hideBtns = () => {
    this.setState({btnsShow: false})
  }


  render() {
    const { todo, completeTodo, deleteTodo } = this.props
    const { btnsShow } = this.state

    return (
      <li className={`relative bg-white last-no-border ${styles.root}`}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label
          ref="label"
          className={classnames({
            'font-30': true,
            [styles.text]: true,
            [styles.completed]: todo.completed
          })}
          onClick={() => completeTodo(todo.id)}
        >
          <span
            className={classnames({
              [styles.con]: true,
              [styles.conComplete]: todo.completed
            })}
          >{todo.text}</span>
        </label>

        <ReactCSSTransitionGroup
          transitionName="btns"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { btnsShow &&
            <div
              className={styles.btns}
            >
              <button
                className={styles.btnDelete}
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
              <button className={styles.btnEdit}>编辑</button>
              <button
                className={styles.btnCancle}
                onClick={this.hideBtns}
              >
                取消
              </button>
            </div>
          }

        </ReactCSSTransitionGroup>
      </li>
    )
  }
}
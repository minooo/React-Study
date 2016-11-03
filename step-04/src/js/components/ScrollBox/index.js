import React,{Component} from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

export default class ScrollBox extends Component{
  render(){
    const {children, ...rest} = this.props
    return (
      <div>
        <ReactIScroll
          iScroll={iScroll}
          {...rest}
        >
          {children}
        </ReactIScroll>
      </div>
    )
  }
}

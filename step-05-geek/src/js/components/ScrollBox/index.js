import React,{Component} from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

/*
 const ScrollBox = ({children, ...rest}) => {
 return (
 <ReactIScroll
 iScroll={iScroll}
 {...rest}
 >
 {children}
 </ReactIScroll>
 )
 }

 export default ScrollBox*/

export default class ScrollBox extends Component {
  render() {
    const {children, ...rest} = this.props
    return (
      <ReactIScroll
        iScroll={iScroll}
        {...rest}
      >
        {children}
      </ReactIScroll>
    )
  }
}

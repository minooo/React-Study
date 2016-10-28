import React, { Component } from 'react'

const Post = props => {
  return (
    <div>
      <h1>React</h1>
      <button onClick={props.onRequestPosts}>异步获取</button>
      <ul>
        {
          props.items && props.items.map((item, index) =>
            <li key={index}>{item.title}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Post
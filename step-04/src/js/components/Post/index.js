import React, { Component } from 'react'

const Post = props => {
  return (
    <div>
      <h1>React</h1>
      <ul>
        {
          props.post.map((item, index) =>
            <li key={index}>item.title</li>
          )
        }
      </ul>
    </div>
  )
}

export default Post
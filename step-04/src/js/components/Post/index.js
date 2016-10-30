import React, { Component } from 'react'
import { ActivityIndicator, WingBlank, WhiteSpace, Button, List } from 'antd-mobile'
const Post = props => {
  return (
    <div>
      <WhiteSpace />
        <WingBlank>
          <Button
            type="ghost"
            loading={props.isFetching}
            disabled={props.isFetching}
            onClick={props.onRequestPosts}
          >
            {!props.isFetching ? '异步加载 Github 用户' : 'Loading...'}
          </Button>
        </WingBlank>
      <WhiteSpace />
      <List>
        {
          props.items && props.items.map((item, index) =>
            <List.Item key={index} data-seed="logId">{item.login}</List.Item>
          )
        }
      </List>
    </div>
  )
}

export default Post
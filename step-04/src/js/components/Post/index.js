import React, { Component } from 'react'
import styles from './index.scss'
import { ActivityIndicator, WingBlank, WhiteSpace, Button, Badge } from 'antd-mobile'
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
      {
        props.items.length>0 && <div className={styles.root}>
          {
            props.items.map((item, index) =>
              <div className={styles.list} key={index}>
                <img
                  src={item.avatar_url}
                  className={styles.img}
                  alt=""
                />

                <div className={styles.con}>
                  <p className="font-28">昵称：{item.login}</p>
                  <p className="font-28">
                    主页：
                    <a href={item.html_url} className={styles.link}>我的 Github </a>
                  </p>
                  <p className="font-28">粉丝：{item.followers}</p>
                </div>
              </div>
            )
          }
        </div>
      }

    </div>
  )
}

export default Post
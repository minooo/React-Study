import React, { Component } from 'react'
import styles from './index.scss'
const Post = props => {
  return (
    <div>
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
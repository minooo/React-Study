import React, { Component } from 'react'
import styles from './index.scss'
import { Icon } from 'antd-mobile'
const Post = props => {
  return (
    <div>
      {/*<WhiteSpace />
        <WingBlank>
          <Button
            type="ghost"
            loading={props.isFetching}
            disabled={props.isFetching}
            onClick={props.onRequestPosts}
          >
            {!props.isFetching ? '异步加载 Github ' : 'Loading...'}
          </Button>
        </WingBlank>
      <WhiteSpace />*/}

      {/*{
        props.lastUpdated &&
        <div
          className="text-center ptb30"
        >
          上次更新：{props.lastUpdated}
        </div>
      }*/}

      {
        !props.isFetching &&
        <div
          className={`center-center ${styles.refresh} ${props.isRefreshDown && styles.refresh2}`}
        >
          {
            !props.isRefreshDown ?
            <div><Icon type="arrow-down" />下拉刷新</div> :
            <div><Icon type="arrow-up" />放手刷新</div>
          }
        </div>
      }

      {
        props.isRefreshDown && <div style={{height: '0.6rem'}}></div>
      }

      {
        props.isFetching &&
        <div
          className="center-center"
          style={{height:'0.6rem'}}
        >
          <Icon type="loading" className="font-26" />&nbsp;&nbsp;拼命加载中...</div>
      }

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
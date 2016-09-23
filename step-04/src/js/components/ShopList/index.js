import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from './index.scss'

const ShopList = ({data}) => {
  return (
    <Link to={{pathname:'/shop/' + data.id}} className={`cf last-no-border ${styles.root}`}>
      <div className="fl relative overflow-h">
        <img src={data.thumb} className={styles.rootOneOne}/>
        {data.label && <span className={styles.rootOneTwo}>{data.label}</span>}
      </div>

      <div className={styles.rootThr}>
        <span className={styles.rootThrOne}>{data.discount_scale}</span>
        <em className={styles.rootThrTwo}>折</em>
      </div>

      <div className={styles.rootTwo}>
        <h3 className={"text-overflow-1 " + styles.rootTwoZero}>
          {data.title}
        </h3>

        {data.caption &&
        <h3 className={"text-overflow-1 " + styles.rootTwoOne}>
          {data.caption}
        </h3>}

        <h4 className={styles.rootTwoTwo}>
          <span className={styles.rootTwoTwoOne}>{data.tag}{' '}</span>
          <em className={styles.rootTwoTwoTwo}> | {data.distance}</em>
        </h4>

        {data.discount_text &&
        <h5 className={styles.rootTwoThr}>
          <i className={"i-weixinzhifu32 " + styles.rootTwoThrOne} />
          <span className={styles.rootTwoThrTwo}>{data.discount_text}</span>
        </h5>}

        {data.discount_time &&
        <h6 className={"text-overflow-1 " + styles.rootTwoTFour}>
          <i className={"i-shijian28 " + styles.rootTwoTFourOne} />
          <span className={styles.rootTwoTFourTwo}>
              {data.discount_time}
            </span>
        </h6>}

      </div>
    </Link>
  )
}

export default ShopList
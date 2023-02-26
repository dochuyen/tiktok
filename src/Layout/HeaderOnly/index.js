import Header from './Header/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss'

import React from 'react'
const cx=classNames.bind(styles)
const HeaderOnly = ({children}) => {
  return (
    <div className={cx('wrapper')}>
      <Header/>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly;

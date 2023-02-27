import React from 'react'
import classNames from 'classnames/bind'
import styles from './Layoutfake.module.scss'
import HeaderProfile from './HeaderProfile/HeaderProfile'
import { SideBar } from './SideBar'

const cx=classNames.bind(styles)
const Layoutfake = ({children}) => {
  return (
    <div className={cx('wrapper')}>
      <HeaderProfile/>
      <div className={cx('container')}>
        <SideBar/>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}

export default Layoutfake

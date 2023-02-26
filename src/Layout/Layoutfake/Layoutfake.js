import React from 'react'
import classNames from 'classnames/bind'
import styles from './Layoutfake.module.scss'

const cx=classNames.bind(styles)
const Layoutfake = ({children}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

export default Layoutfake

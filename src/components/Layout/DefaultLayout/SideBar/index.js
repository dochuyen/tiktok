import classNames from 'classnames/bind'
import styles from "./SideBar.module.scss"

const cx= classNames.bind(styles)


const SideBar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>sidebar</h2>
    </aside>
  )
}

export default SideBar

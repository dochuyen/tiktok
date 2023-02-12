import classNames from "classnames/bind"
import styles from './Header.module.scss'
import images from "/assets/images"
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {ImSearch} from 'react-icons/im'

const cx= classNames.bind(styles)
const Header = () => {
  return (
    <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="TikTok" />
          </div>
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
            <IoIosCloseCircleOutline/>
            </button>
            <AiOutlineLoading3Quarters className={cx("loading")} />

            <button className={cx('search-btn')}>
              <ImSearch/>
            </button>
          </div>

          <div className={cx('actions')}>
            
          </div>
        </div>
    </header>
  )
}

export default Header

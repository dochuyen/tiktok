import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import {IoChevronBack} from "react-icons/io5"

const cx = classNames.bind(styles);
const Header = ({title, onBack}) => {

  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <IoChevronBack/>    
      </button>
      <h4 className={cx('header-title')}>Language</h4>
    </header>
  );
};

export default Header;

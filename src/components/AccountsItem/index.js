import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Image from 'components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <BsFillCheckCircleFill className={cx('check')} />}
        </h4>
        <span className={cx('usename')}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;

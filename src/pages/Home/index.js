import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Button } from 'components/Button';

const cx = classNames.bind(styles);
const Home = () => {
  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('top-top')}>
        <div className={'avt'}>
          <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/326198473_941597696827599_3068677457680472381_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=kiepOaD7MkIAX-MjrJ1&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB-OHyEfJtfAdBHRggFGFS9FEAqMfKBm5N1__O9KCZewQ&oe=63F7E601" />
        </div>
        <div className={cx('info')}>
          <div className={cx('info-child')}>
            <h4 className={cx('user-name')}>chuyen</h4>
            <p className={cx('name')}>dochuyen</p>
            <p className={cx('content')}>SIUUUUUUUUUUUU</p>
          </div>
          <Button className={cx} outline>
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

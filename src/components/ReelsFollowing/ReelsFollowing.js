import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ReelsFollowing.module.scss';
import { Button } from 'components/Button';
import { BsFillHeartFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { GiSoundOn } from 'react-icons/gi';
import Tippy from '@tippyjs/react';

import videofl from './videofl/video.mp4';

const cx = classNames.bind(styles);

const ReelsFollowing = () => {
    const [follow, setFollow] = useState('Following');
    const [tym, setTym] = useState('');
    const [countTym, setCountTym] = useState(25);
  
    const handleFollow = () => {
      setFollow(follow === 'Following' ? 'Follow' : 'Following');
    };
  
    useEffect(() => {
      console.log(countTym);
    }, [countTym]);
  
    const handleTym = () => {
      setTym(tym === '' ? 'var(--primary)' : '');
      setCountTym(countTym + 1);
      if (countTym % 2 === 0) {
        setCountTym(countTym - 1);
      } else {
        setCountTym(countTym + 1);
      }
    };
  
    return (
      <div className={cx('wrapper')}>
        <div className={cx('top-top')}>
          <div className={cx('avt')}>
            <img
              className={cx('avt-user')}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/326198473_941597696827599_3068677457680472381_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=kiepOaD7MkIAX-MjrJ1&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB-OHyEfJtfAdBHRggFGFS9FEAqMfKBm5N1__O9KCZewQ&oe=63F7E601"
            />
          </div>
          <div className={cx('reel')}>
            <div className={cx('info')}>
              <div className={cx('info-child')}>
                <div className={cx('use')}>
                  <p className={cx('user-name')}>chuyen</p>
                  <BsFillCheckCircleFill className={cx('check')} />
                  <p className={cx('name')}>dochuyen</p>
                </div>
                <p className={cx('content')}>SIUUUUUUUUUUUU</p>
                <h4 className={cx('sound')}>
                  <span className={cx('icon-sound')}>
                    <GiSoundOn />
                  </span>
                  nhạc nền - Hardy
                </h4>
              </div>
              <Button className={cx('btn')} onClick={handleFollow} outline>
                {follow}
              </Button>
            </div>
            <div className={cx('video')}>
              <video className={cx('video-center')} width="290px" height="516px" autoplay loop controls>
                <source src={videofl} type="video/mp4" />
              </video>
              <div className={cx('icons')}>
                <button className={cx('icon-chil')} onClick={handleTym}>
                  <BsFillHeartFill className={cx('icon')} style={{ color: tym }} />
                </button>
                <strong className={cx('count')}>{countTym}k</strong>
                <button className={cx('icon-chil')}>
                  <AiOutlineComment className={cx('icon')} />
                </button>
                <strong className={cx('count')}>200k</strong>
  
                <button className={cx('icon-chil')}>
                  <FaShare className={cx('icon')} />
                </button>
                <strong className={cx('count')}>200k</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReelsFollowing

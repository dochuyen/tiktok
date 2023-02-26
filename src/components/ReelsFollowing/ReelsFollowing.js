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

const ReelsFollowing = ({ data }) => {
  const [follow, setFollow] = useState('Following');
  const [tym, setTym] = useState('');
  const [countTym, setCountTym] = useState(+`${data.tym}`);

  const handleFollow = () => {
    setFollow(follow === 'Following' ? 'Follow' : 'Following');
  };

  useEffect(() => {
    console.log(countTym);
  }, [countTym]);

  const handleTym = () => {
    setTym(tym === '' ? 'var(--primary)' : '');
    setCountTym(countTym + 1);
    if (countTym === +`${data.tym}`) {
      setCountTym(countTym + 1);
    } else {
      setCountTym(countTym - 1);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('top-top')}>
        <div className={cx('avt')}>
          <img className={cx('avt-user')} src={data.avatar} />
        </div>
        <div className={cx('reel')}>
          <div className={cx('info')}>
            <div className={cx('info-child')}>
              <div className={cx('use')}>
                <p className={cx('user-name')}>{data.name}</p>
                <BsFillCheckCircleFill className={cx('check')} />
                <p className={cx('name')}>{data.nickname}</p>
              </div>
              <p className={cx('content')}>{data.content}</p>
              <h4 className={cx('sound')}>
                <span className={cx('icon-sound')}>
                  <GiSoundOn />
                </span>
                {data.song}
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
              <strong className={cx('count')}>{countTym}</strong>
              <button className={cx('icon-chil')}>
                <AiOutlineComment className={cx('icon')} />
              </button>
              <strong className={cx('count')}>{data.cmt}</strong>

              <button className={cx('icon-chil')}>
                <FaShare className={cx('icon')} />
              </button>
              <strong className={cx('count')}>{data.share}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsFollowing;

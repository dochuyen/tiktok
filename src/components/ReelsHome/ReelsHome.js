import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ReelsHome.module.scss';
import { Button } from 'components/Button';
import { BsFillHeartFill, BsFillCheckCircleFill, BsFacebook } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { GiSoundOn } from 'react-icons/gi';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { tippy } from '@tippyjs/react';
import {ImEmbed2} from 'react-icons/im'
import {FiSend} from 'react-icons/fi'
import {BiCopy} from 'react-icons/bi'
import {RiArrowDropDownLine} from 'react-icons/ri'

import video from './video/video.mp4';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const ReelsHome = ({ data }) => {

  const shareMenus=[
    {
      icon:<ImEmbed2/>,
      text:'Embed'
    },
    {
      icon:<FiSend/>,
      text:'Send to friends'
    },
    {
      icon:<BsFacebook/>,
      text:'Share to Facebook'
    },
    {
      icon:<BiCopy/>,
      text:'Copy link'
    },
  ]

  const storageTyms = localStorage.countTym;

  const [follow, setFollow] = useState('Follow');
  const [tym, setTym] = useState('');
  const [countTym, setCountTym] = useState(`${data.id}`);

  const handleFollow = () => {
    setFollow(follow === 'Follow' ? 'Following' : 'Follow');
  };

  useEffect(() => {}, [countTym]);

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
        <Link className={cx('avt')} to="/profile/@chuyenn">
          <img className={cx('avt-user')} src={data.avatar} />
        </Link>
        <div className={cx('reel')}>
          <div className={cx('info')}>
            <div className={cx('info-child')}>
              <Link className={cx('use')} to={`/profile/@${data.nickname}`}>
                <p className={cx('user-name')}>{data.last_name}</p>
                {data.tick && <BsFillCheckCircleFill className={cx('check')} />}
                <p className={cx('name')}>{data.nickname}</p>
              </Link>
              <p className={cx('content')}>{data.bio}</p>
              <h4 className={cx('sound')}>
                <span className={cx('icon-sound')}>
                  <GiSoundOn />
                </span>
                {data.updated_at}
              </h4>
            </div>
            <Button className={cx('btn')} onClick={handleFollow} outline>
              {follow}
            </Button>
          </div>
          <div className={cx('video')}>
            <video className={cx('video-center')} width="290px" height="516px" autoplay loop controls>
              <source src={video} type="video/mp4" />
            </video>
            <div className={cx('icons')}>
              <button className={cx('icon-chil')} onClick={handleTym}>
                <BsFillHeartFill className={cx('icon')} style={{ color: tym }} />
              </button>
              <strong className={cx('count')}>{countTym}</strong>
              <button className={cx('icon-chil')}>
                <AiOutlineComment className={cx('icon')} />
              </button>
              <strong className={cx('count')}>{data.followings_count}</strong>
              <Tippy
                delay={[0, 100]}
                
                render={(attts) => (
                  <div className={cx('shares')} tabIndex="-1" {...attts}>
                    <div className={cx('share')}>
                      {shareMenus.map((shareMenu, index)=>(
                        <div className={cx('share-wrapper')}>
                          <span className={cx('share-icon')}>{shareMenu.icon}</span>
                          <button className={cx('btn-share')}>{shareMenu.text}</button>
                        </div>
                      ))}
                      <button className={cx('drop')}>
                        <RiArrowDropDownLine className='icon-drop'/>
                      </button>
                    </div>
                    
                  </div>
                )}
              >
                <button className={cx('icon-chil')}>
                  <FaShare className={cx('icon')} />
                </button>
              </Tippy>
              <strong className={cx('count')}>{data.followers_count}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsHome;

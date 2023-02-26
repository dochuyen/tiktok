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
import { ImEmbed2 } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';

import video from './video/video.mp4';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const ReelsHome = ({ data }) => {
  const shareMenus = [
    {
      icon: <ImEmbed2 />,
      text: 'Embed',
    },
    {
      icon: <FiSend />,
      text: 'Send to friends',
    },
    {
      icon: <BsFacebook />,
      text: 'Share to Facebook',
    },
    {
      icon: <BiCopy />,
      text: 'Copy link',
    },
  ];

  const storageTyms = localStorage.getItem('countTym');

  const [follow, setFollow] = useState('Follow');
  const [tym, setTym] = useState('');
  const [countTym, setCountTym] = useState(+`${data.tym}`);

  const handleFollow = () => {
    setFollow(follow === 'Follow' ? 'Following' : 'Follow');
  };

  // useEffect(() => {
  //   fetch('https://63de107ff1af41051b0d0b2c.mockapi.io/videotiktok', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name: 'TikTok Video 1' }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);

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
        <Link className={cx('avt')} to="/profile/@chuyenn">
          <img className={cx('avt-user')} src={data.avt} />
        </Link>
        <div className={cx('reel')}>
          <div className={cx('info')}>
            <div className={cx('info-child')}>
              <Link className={cx('use')} to={`/profile/@${data.name}`}>
                <p className={cx('user-name')}>{data.name}</p>
                {data.tick && <BsFillCheckCircleFill className={cx('check')} />}
                <p className={cx('name')}>{data.nickname}</p>
              </Link>
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
              <strong className={cx('count')}>{data.cmt}</strong>
              <Tippy
                delay={[0, 100]}
                render={(attts) => (
                  <div className={cx('shares')} tabIndex="-1" {...attts}>
                    <div className={cx('share')}>
                      {shareMenus.map((shareMenu, index) => (
                        <div className={cx('share-wrapper')}>
                          <span className={cx('share-icon')}>{shareMenu.icon}</span>
                          <button className={cx('btn-share')}>{shareMenu.text}</button>
                        </div>
                      ))}
                      <button className={cx('drop')}>
                        <RiArrowDropDownLine className="icon-drop" />
                      </button>
                    </div>
                  </div>
                )}
              >
                <button className={cx('icon-chil')}>
                  <FaShare className={cx('icon')} />
                </button>
              </Tippy>
              <strong className={cx('count')}>{data.share}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsHome;

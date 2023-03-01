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

import { useParams } from 'react-router-dom';
import Menu from 'Layout/component/Popper/Menu';
import video1 from './video/1.mp4';
import video2 from './video/2.mp4';
import video3 from './video/3.mp4';
import video4 from './video/4.mp4';
import video5 from './video/5.mp4';
import video6 from './video/6.mp4';
import video7 from './video/7.mp4';
import video8 from './video/8.mp4';

const cx = classNames.bind(styles);

const ReelsHome = ({data}) => {
 

  const [followStatus, setFollowStatus] = useState({});
  // const storageTyms = localStorage.setItem('tym', countTym);

  const [follow, setFollow] = useState('Follow');
  const [tym, setTym] = useState('');
  const [countTym, setCountTym] = useState(+`${data.tym}`);

 

  const shareMenus = [
    {
      icon: <ImEmbed2 />,
      title: 'Embed',
    },
    {
      icon: <FiSend />,
      title: 'Send to friends',
    },
    {
      icon: <BsFacebook />,
      title: 'Share to Facebook',
    },
    {
      icon: <BiCopy />,
      title: 'Copy link',
    },
    {
      icon: <RiArrowDropDownLine />,
    },
  ];



  const handleFollow = (dataId) => {
    setFollow(follow === 'Follow' ? 'Following' : 'Follow');

    fetch('https://63fb4ba12027a45d8d63d560.mockapi.io/tiktokfl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data_id: dataId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFollowStatus((prev) => ({    
            ...prev,
            [dataId]: data.succes,
        }));
      })
      .catch((error) => {
        alert('Fail!');
      });
  };

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
                  {followStatus[data.id] && <p>Followed successfully</p>}
                  <p className={cx('content')}>{data.content}</p>
                  <h4 className={cx('sound')}>
                    <span className={cx('icon-sound')}>
                      <GiSoundOn />
                    </span>
                    {data.song}
                  </h4>
                </div>
                <Button className={cx('btn')} onClick={()=>handleFollow(data.id)} outline>
                  {follow}
                </Button>
              </div>
              <div className={cx('video')}>
                <video className={cx('video-center')} width="290px" height="516px" controls>
                  <source src={video2} type="video/mp4" />
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

                  <Menu items={shareMenus}>
                    <button className={cx('icon-chil')}>
                      <FaShare className={cx('icon')} />
                    </button>
                  </Menu>

                  <strong className={cx('count')}>{data.share}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default ReelsHome;

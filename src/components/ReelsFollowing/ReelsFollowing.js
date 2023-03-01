import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ReelsFollowing.module.scss';
import { Button } from 'components/Button';
import { BsFillHeartFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { GiSoundOn } from 'react-icons/gi';
import Tippy from '@tippyjs/react';
import Menu from 'Layout/component/Popper/Menu';
import { ImEmbed2 } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import axios from 'axios';
import videofl from './videofl/video.mp4';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);

const ReelsFollowing = ({ data, setUser }) => {
  const tymm=localStorage.getItem('countTym')

  const [follow, setFollow] = useState('Following');
  const [tym, setTym] = useState('');
  const [countTym, setCountTym] = useState(+`${data.tym}`);

  const handleUnFollow = (dataId) => {
    setFollow(follow === 'Following' ? 'Follow' : 'Following');
    axios.delete(`https://63fb4ba12027a45d8d63d560.mockapi.io/tiktokfl/${dataId}`)
    .then(res=>{
      console.log(res)
      setUser(data.filter(use=>use.id !== dataId))
    })
    .catch((error)=>{
      console.error('error deleting',)
    })
  };




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
      <Link className={cx('avt')} to={`/profile/@${data.name}`}>
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
            <Button className={cx('btn')} onClick={handleUnFollow} outline>
              {follow}
            </Button>
          </div>
          <div className={cx('video')}>
            <video className={cx('video-center')} width="290px" height="516px" autoplay loop controls>
              <source src={videofl} type="video/mp4" />
            </video>
            <div className={cx('icons')}>
              <button className={cx('icon-chil')} onClick={()=>handleTym(data.id)}>
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

export default ReelsFollowing;

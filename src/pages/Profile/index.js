import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import ModalMy from 'components/Modal/modal';
const cx = classNames.bind(styles);

const Profile = () => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };
  const tabs = ['Videos', 'Liked'];
  const [type, setType] = useState('videos');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://63fa02d9897af748dcc7907c.mockapi.io/account`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const idUser = parseInt(localStorage.getItem('key'));
  console.log(idUser);
  useEffect(() => {
    const foundUser = users.find((user) => user.id == idUser);
    if (foundUser) {
      setUser(foundUser);
    }
  }, [idUser, users]);
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('profile')}>
          <div className={cx('user')}>
            <img className={cx('avatar')} src={user.avatar} alt="avatar" />
            <div className={cx('getName')}>
              <h1>{user.username}</h1>
              <h3>{user.name}</h3>
              <ModalMy></ModalMy>
            </div>
            <button className={cx('share')}>
              <RiShareForwardLine />
            </button>
          </div>
          <div className={cx('status')}>
            <ul>
              <li>
                <h3>
                  100 <span>Đang Follow</span>
                </h3>
              </li>
              <li>
                <h3>
                  {user.followers} <span>Follower</span>
                </h3>
              </li>
              <li>
                <h3>
                  {user.likes} <span>Like</span>
                </h3>
              </li>
            </ul>
            <h2>Tiểu sử</h2>
          </div>
        </div>

        <div className={cx('act-user')}>
          <div className={cx('btn-tabs')}>
            {tabs.map((tab) => (
              <button
                key={tab}
                style={type === tab ? { color: '#fff', backgroundColor: '#222' } : {}}
                onClick={() => setType(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={cx('list-videos')} key={user.id}>
            {user &&
              user.videos &&
              user.videos.map((video) => (
                <div className={cx('box-video')} key={video.id}>
                  <div className={cx('content-video')}>
                    <div className={cx('tiktok-video')} onClick={handleClick}>
                      <video src="" controls />
                    </div>
                  </div>
                  <div>
                    <h5> {user.content} </h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Profile;

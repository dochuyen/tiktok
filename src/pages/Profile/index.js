import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import ModalMy from 'components/Modal/modal';
const cx = classNames.bind(styles);

const Profile = () => {
  const tabs = ['Videos', 'Likeds'];
  const [data, setData] = useState([]);
  const [type, setType] = useState('Videos');
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    username: 'bachquanghung1911',
    password: 'Bachquanghung@1911',
    videos: [],
    name: 'name 1',
    followers: 44,
    likes: 58,
    avatar: '',
    id: '1',
  });

  useEffect(() => {
    fetch(`https://63fa02d9897af748dcc7907c.mockapi.io/account`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const idUser = parseInt(localStorage.getItem('key'));

  for (var i = 0; i < users.length; i++) {
    if (users[i].id == idUser) {
      setUser(users[i]);
    }
  }
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
            <div className={cx('box-video')}>
              <div className={cx('content-video')}>
                <div className={cx('tiktok-video')}>
                  <img src={user.video} alt="" />
                </div>
              </div>
              <div>
                <h5> {user.content} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Profile;

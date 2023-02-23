import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { TbEdit } from 'react-icons/tb';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import ModalMy from 'components/Modal/modal';
const cx = classNames.bind(styles);

const Profile = () => {
  const tabs = ['Videos', 'Likeds'];
  const [videos, setVideos] = useState([]);
  const [type, setType] = useState('Videos');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/${type} `)
      .then((res) => res.json())
      .then((videos) => {
        setVideos(videos);
      });
  }, [type]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('profile')}>
        <div className={cx('user')}>
          <img
            className={cx('avatar')}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EACwQAAICAQMCBQMEAwAAAAAAAAABAgMRBCExBRIiQVFhcTJSYhMUkdEjobH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APpgANMgAAAGdVU7pdtcXJgYA3F06/bPas878G3DplKXicpP1zgaqoBa2dLra/xzcX77or76LKJdtixnh+TGiIABAAAAAAAAAAASUVO+2NcfPz9C9qqhVWoQWEv9mn0mntrdr5lsvg3yVYAAihhbXG2twmspmYA5++qVFrrl5cP1RGW3Vae6pWrmHPwVJqIAAIAAAAAB6k20lyzwl0qzqak/vQF7XBV1xguIrBkAZaAAAAAGNkVOEoPiSwc81h4fKOjOf1KxqbV5d7/6WJUYAKgAAAAAEuleNTU/zREe5aaa5W6A6MGNc1ZXGa4ksoyMtAAAAAAc9bLvtnL7pNl7fLsosl6RbOfXBYlAAVAAAAAAPcN7JZb8jw9TaacW01w0KL/TQdenrhLmMcMkKenqF8NpOMl6yX9FhHW6eTSVicnthJ8mWmwAAABry1tEXKLsSksrDTAk1EHbROC5ksIoGmm1JYa5Rt3dQvllRcYr8Uajbk25NtvlsqPAAVAAAAAAAAAm0ce/V1L8s/xuQlp0zTShm6xNNrEUxVWAAMqFFrYdmrtXrLP87l6V/U9NKeLq020sSS8ywVYAKyAAAAAABs6HTfuLfF9Efq/oKhrqsteK4uXwbtXTJve2aj7R3ZZxjGEVGKSiuEj0mmIKdJTTvGGZfc92TgEUAAAAAQXaSm7ecPF9y2ZpW9Mmt6pqXtLZloAOetqsqeLIOPyYHRyjGcXGSTT8mUuu037ezw/RLj29i6jWABUC80NX6OmiseJ7sAlWNgAEUAAAAAAAAAAAg1tP62nkl9S3XyABRIAGmX//2Q=="
            alt="avatar"
          />
          <div className={cx('getName')}>
            <h1>dankieu.ks</h1>
            <h3>Đàn</h3>
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
                100 <span>Đang Follow</span>{' '}
              </h3>
            </li>
            <li>
              <h3>
                100K <span>Follower</span>
              </h3>
            </li>
            <li>
              <h3>
                960.5M <span>Like</span>
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
        {/* {videos.map((video) => {
          return  */}
        <div className={cx('tiktok-video')}></div>{/* })} */}
      </div>
    </div>
  );
};

export default Profile;

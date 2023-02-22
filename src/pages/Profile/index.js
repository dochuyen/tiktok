import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { TbEdit } from 'react-icons/tb';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import ModalMy from 'components/Modal/modal';
const cx = classNames.bind(styles);

const Profile = () => {
  const Data = [
    {
      MV: 'https://www.youtube.com/embed/EnkPJV16Jf8',
      title: 'Painting company',
      discription:
        'Marketing 360® has been an integral part of our marketing. Having an account manager that helps you with all of your marketing, not just your branding online, is a huge component and a huge asset.',
    },
    {
      MV: 'https://www.youtube.com/embed/vduDCS9sHus',
      title: 'Contractor',
      discription:
        "We've always seen a return of six or seven times our investment. As far as I know, now it's a simple equation. You get good management, you spend the right target amount of money, there's gonna be a return on your investment.",
    },
    {
      MV: 'https://www.youtube.com/embed/RSnhEuwyVW0',
      title: 'E-Commerce store',
      discription:
        "With Marketing 360®, we're able to create artwork specific to everyone's needs across the country by marketing to everyone across the country. Every day we have new orders to fulfill, and we have a lot of fun doing it.",
    },
    {
      MV: 'https://www.youtube.com/embed/-PXM6Wg4LqY',
      title: 'Yoga studio',
      discription:
        "Marketing 360® is one of the most powerful tools we've used. Previously, we've seen other studios using multiple platforms to get the same type of experience that's all in one place with Marketing 360®. It's like having an entire marketing and advertising team in our back pocket.",
    },
    {
      MV: 'https://www.youtube.com/embed/t9hgJjA_85c',
      title: 'E-Commerce store',
      discription:
        "The great thing about Marketing 360® is the small town feel of the company, but with the backing of a big business. We've been able to leverage that by really getting help with everything we need from a marketing standpoint through one company and platform.",
    },
    {
      MV: 'https://www.youtube.com/embed/iDI_XfEhzUg',
      title: 'E-Commerce store',
      discription:
        "Year to date, online sales are up 27%. What that's not considering is the increase in people that have called in to place their order over the phone, how many more people have come to us through social media and more. We think about marketing differently now.",
    },
    {
      MV: 'https://www.youtube.com/embed/oaHzj6Thzh8',
      title: 'E-Commerce store',
      discription:
        "Get team swag and apparel that represents your brand! It is as simple as letting us know what you need and when you need it, and we'll take care of the rest!",
    },
    {
      MV: 'https://www.youtube.com/embed/aI5J39DPv-Q',
      title: 'Dermatologist',
      discription:
        'Marketing 360® has grown our practice to capacity quicker than we could have expected or done on our own. They have allowed us to focus on other parts of our business more successfully because we fully trust what they are doing to improve our return and grow our business.',
    },
    {
      MV: 'https://www.youtube.com/embed/k5y6v7XUbQY',
      title: 'Equipment contractor',
      discription:
        "Up until recently, Wagner has predominantly grown from word of mouth based on the iconic Caterpillar name, a robust sales force and extensive community involvement. But now, we're taking a more assertive approach with our digital efforts through our partners at Marketing 360®.",
    },
    {
      MV: 'https://www.youtube.com/embed/LWxbYtvcNJY',
      title: 'Chiropractor',
      discription:
        "Marketing 360® has allowed us to get our story and the purpose of our company out in front of people. It is a one-stop shop that can personalize your business's existence, put you on the map and help you reach your dreams and goals.",
    },
    {
      MV: 'https://www.youtube.com/embed/kHrq5GRiXEs',
      title: 'Auto repair shop',
      discription:
        'Marketing 360® is responsible for helping us generate millions in new business over the past seven years. We have had to brainstorm and challenge the status quo but it has paid off in spades. Marketing 360® fuels my brand.',
    },
  ];

  const tabs = ['posts', 'albums'];
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/${type} `)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
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
              style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {Data.map((datas) => {
          return <div className={cx('tiktok-video')}></div>;
        })}
      </div>
    </div>
  );
};

export default Profile;

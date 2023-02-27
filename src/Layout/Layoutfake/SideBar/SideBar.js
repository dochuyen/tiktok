import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Button } from 'components/Button';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { BsCameraReelsFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SuggestedAccounts from 'components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

const buttonItems = [
  {
    id:1,
    icon: <AiFillHome />,
    text: 'For you',
    to:'/'
  },
  {
    id:2,
    icon: <FaUserFriends />,
    text: 'Following',
    to:'/following'
  },
  {
    id:3,
    icon: <BsCameraReelsFill />,
    text: 'Live',
    to:'/live'
  },
];


const SideBar = () => {
    const [lessonText, setLessonText]=useState(1)


  return (
    <aside className={cx('wrapper')}>
      <div className={cx('nav-side')} >
        {buttonItems.map((buttonItem) => (
          <Button key={buttonItem.id} className={cx('nav-foryou')} 
          to={buttonItem.to}
          

        onClick={()=>setLessonText(buttonItem.id)}
          >
            <h2 className={cx('nav-title')} style={{
            color:lessonText===buttonItem.id?
            'var(--primary)':'rgba(22, 24, 35, 1)'
        }}
        >
              <span className={cx('nav-icon')}>
                {buttonItem.icon}
              </span>
              {buttonItem.text}
            </h2>
          </Button>
        ))}
      </div>

      <div className={cx('suggested')}>
        <p className={cx('suggested-chil')}>Suggested accounts</p>
        <SuggestedAccounts/>
            
      </div>

      <div className={cx('following-accounts')}>
        <p className={cx('fl')}>Following accounts</p>
        <SuggestedAccounts/>
      </div>
    </aside>
  );
};

export default SideBar;

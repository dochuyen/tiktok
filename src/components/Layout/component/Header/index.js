import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from 'components/Button';
import Menu from '../Popper/Menu/index';
import { IoLogoTiktok } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { FiMoreVertical, FiSend } from 'react-icons/fi';
import { MdOutlineLanguage } from 'react-icons/md';
import { GoQuestion } from 'react-icons/go';
import { CgKeyboard } from 'react-icons/cg';
import { BiCloudUpload, BiMessageAltDots, BiLogIn } from 'react-icons/bi';
import Search from '../Search';
import Image from 'components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <MdOutlineLanguage />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <GoQuestion />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <CgKeyboard />,
    title: 'Keyboard shortcuts',
  },
];
const Header = () => {
  const currentUser = true;

  //HandleLogic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
    }
  };

  const userMenu = [
    {
      icon: <AiOutlineUser />,
      title: 'View profile',
      to: '/@chuyenn',
    },
    {
      icon: <IoLogoTiktok />,
      title: 'Get coins',
      to: '/getcoins',
    },
    {
      icon: <AiOutlineSetting />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <BiLogIn />,
      title: 'login',
      to: '/login',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content="Upload video">
                <button className={cx('action-btn')}>
                  <BiCloudUpload />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Messenger">
                <button className={cx('action-btn')}>
                  <FiSend />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Inbox">
                <button className={cx('action-btn')}>
                  <BiMessageAltDots />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c6a4209e12ae14e0e7f0d2a325778d1a~c5_100x100.jpeg?x-expires=1676444400&x-signature=WEl7AAufFPAS%2FgJOHmfi8DmSWlA%3D"
                className={cx('user-avatar')}
                alt="Do Van Chuyen"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FiMoreVertical />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Button } from 'components/Button';
import Menu from '../Popper/Menu/index';
import { IoLogoTiktok } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { FiMoreVertical, FiSend } from 'react-icons/fi';
import { MdOutlineLanguage } from 'react-icons/md';
import { GoQuestion } from 'react-icons/go';
import { CgKeyboard } from 'react-icons/cg';
import { BiCloudUpload, BiMessageAltDots, BiLogIn } from 'react-icons/bi';
import { Search } from '../Search';
import Image from 'components/Image';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';

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
  // const [logOut, setLogOut] = useState(false);
  // useEffect(()=>{
  //   if(!logOut){
  //     setLogOut(false)
  //   }else(
  //    setLogOut(true)
  //   )
  // },[currentUser])
 
  const [account, setAccount] = useState({ user: '', pass: '' });
  const [currentUser, setCurrentUser] = useState(false);
  const [loginValid, setLoginValid] = useState(false);

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

  const [videoUploaded, setVideoUploaded] = useState('');
  useEffect(() => {
    fetch('https://63fa02d9897af748dcc7907c.mockapi.io/account')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const idUser =parseInt(localStorage.getItem('key'))

 useEffect(()=>{
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == idUser) {
      setCurrentUser(true)
    }
  }
 })


  //HandleLogic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
    }
  };

  // const handleLogOut = () => {
  //   for (let i = 0; i < suggestion.length; i++) {
  //     if (localStorage.id) {
  //       localStorage.removeItem(suggestion[i].id);
  //       console.log('hello')
  //     }
  //   }
  // };
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
      title: 'logout',
      separate: true,
      onclick
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to="/" className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content="Upload video">
                <Link to="/upload">
                  <button className={cx('action-btn')}>
                    <BiCloudUpload />
                  </button>
                </Link>
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
              <Button to="/upload" text>
                Upload
              </Button>
              <Button to="/login" style={{ color: '#fff' }} primary>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73242dcec546271c3d823a0172cc36ab~c5_720x720.jpeg?x-expires=1676977200&x-signature=KtjON9asTiQ%2BeV%2FJtzCKBuENJVw%3D"
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

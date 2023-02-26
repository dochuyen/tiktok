import { useState, useEffect } from 'react';
import ReelsHome from 'components/ReelsHome/ReelsHome';
import styles from './Home.module.scss'
import classNames from 'classnames/bind';

const cx=classNames.bind(styles)
const Home = () => {
  const [user, setUser] = useState([]);
  const [showUser, setshowUser] = useState(false);
  const [randomReels, setRandomReels] = useState();
  useEffect(() => {
    fetch('https://63de107ff1af41051b0d0b2c.mockapi.io/videotiktok')
    .then(res=>res.json())
    .then((res)=>{
      setUser(res)
      console.log(res)
    })
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setshowUser(true);
      } else {
        setshowUser(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={cx('wrapper')}>
      {user.map(use=>(

      <ReelsHome key={use.id} data={use}/>
      ))}
    </div>
  );
};
export default Home;

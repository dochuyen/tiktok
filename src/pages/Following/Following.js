import ReelsFollowing from "components/ReelsFollowing/ReelsFollowing";
import classNames from "classnames/bind";
import styles from './Following.module.scss'
import { useState, useEffect } from "react";

const cx=classNames.bind(styles)
const Following = () => {
  const [user, setUser] = useState([]);
  const [showUser, setshowUser] = useState(false);
  const [randomReels, setRandomReels] = useState();
  useEffect(() => {
    fetch('https://63fb4ba12027a45d8d63d560.mockapi.io/tiktokfl')
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

      <ReelsFollowing key={use.id} data={use} setUser={setUser}/>
      ))}
    </div>
  );
};
export default Following;

import { useState, useEffect } from 'react';
import ReelsHome from 'components/ReelsHome/ReelsHome';

const Home = () => {
  const [user, setUser] = useState([]);
  const [showUser, setshowUser] = useState(false);
  const [randomReels, setRandomReels] = useState();
  useEffect(() => {
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=q&type=less`)
    .then(res=>res.json())
    .then((res)=>{
      setUser(res.data)
      console.log(res.data)
    })
  }, [showUser]);

  

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
    <>
      {user.map(use=>(

      <ReelsHome key={use.id} data={use}/>
      ))}
    </>
  );
};
export default Home;

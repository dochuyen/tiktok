import ReelsFollowing from "components/ReelsFollowing/ReelsFollowing";
import classNames from "classnames/bind";
import styles from './Following.module.scss'

const cx=classNames.bind(styles)
const Following = () => {
  return(
    <>
    <ReelsFollowing/>
    <ReelsFollowing/>
    </>
  )
};
export default Following;

import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineScan } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { RiEyeCloseLine } from 'react-icons/ri';
import { RiEyeFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Login = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [inputEmail, setInputemail] = useState('');
  const [inputPassword, setInputpassword] = useState('');
  const next = useNavigate();

  useEffect(() => {
    fetch(`https://63fb4ba12027a45d8d63d560.mockapi.io/accouttiktok`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res);
      });
  }, []);
  const validUser = searchResult.find((user) => user.email === inputEmail && user.password === inputPassword);
  const handleLogin = () => {
    if (validUser) {
      next('/');
    } else {
      alert('Tài khoản mật khẩu không đúng!');
    }
  };

  const changeEmail = (e) => {
    const { value } = e.target;
    setInputemail(value);
  };
  const changePassword = (e) => {
    const { value } = e.target;
    setInputpassword(value);
  };
  const hideSuggest = () => {
    setShowSuggest(false);
  };

  function showPass() {
    setHidden((prev) => !prev);
  }

  return (
    <div className={cx('container')} onClick={hideSuggest}>
      <div className={cx('title')}>Log in</div>
      <div className={cx('loginField')}>
        <div className={cx('userNameChoice')}>
          <div style={{ marginRight: '150px' }}>Email</div>
          <div>Log in with phone</div>
        </div>
        <div className={cx('loginDetail')}>
          <div className={cx('userName')}>
            <input type="text" style={{ width: '80%' }} value={inputEmail} onChange={changeEmail}></input>
          </div>
          <div className={cx('suggestions')}>
            {!showSuggest
              ? suggestion.map((suggest, i) => (
                  <div key={i} className={cx('suggestion')}>
                    {suggest.username}
                  </div>
                ))
              : ''}
          </div>
          <div className={cx('passWord')}>
            <input
              type={hidden ? 'password' : 'text'}
              style={{ width: '80%' }}
              value={inputPassword}
              onChange={changePassword}
            ></input>
            {hidden ? (
              <span onClick={showPass}>
                <RiEyeCloseLine style={{ cursor: 'pointer' }}></RiEyeCloseLine>
              </span>
            ) : (
              <RiEyeFill style={{ cursor: 'pointer' }} onClick={showPass}></RiEyeFill>
            )}
          </div>
        </div>
        <div className={cx('forgotPass')}>Forgot passWord?</div>

        <button className={cx('loginButton')} type="submit" onClick={handleLogin}>
          Log in
        </button>

        <div className={cx('otherChoice')}>
          <hr style={{ width: '40%' }}></hr>
          <span className={cx('otherChoiceTitle')}>Or</span>
          <hr style={{ width: '40%' }}></hr>
        </div>
        <div className="otherPlatforms">
          <div className={cx('platform')}>
            <AiOutlineScan></AiOutlineScan>
            <span className={cx('platformName')}>Sử dụng mã QR</span>
          </div>

          <div className={cx('platform')}>
            <BsFacebook></BsFacebook>
            <span className={cx('platformName')}>Tiếp tục với Facebook</span>
          </div>

          <div className={cx('platform')}>
            <BsGoogle></BsGoogle>
            <span className={cx('platformName')}>Tiếp tục với Google</span>
          </div>

          <div className={cx('platform')}>
            <BsApple></BsApple>
            <span className={cx('platformName')}>Tiếp tục với Apple</span>
          </div>
        </div>
        <div className={cx('signUp')}>
          Bạn không có tài khoản?{' '}
          <Link to="/register" style={{ color: 'rgba(254,44,85,1)', cursor: 'pointer' }}>
            {' '}
            Đăng kí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

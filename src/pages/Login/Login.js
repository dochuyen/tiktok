import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineScan } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { RiEyeCloseLine } from 'react-icons/ri';
import { RiEyeFill } from 'react-icons/ri';
const cx = classNames.bind(styles);
const Login = () => {

  const [userValid, setUserValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  const [account, setAccount] = useState({ user: '', pass: '' });
  const [hidden, setHidden] = useState(true);
  const [showSuggest, setShowSuggest] = useState(false);

  const [searchResult, setSearchResult] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch(`https://63fa02d9897af748dcc7907c.mockapi.io/account`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res);
      });
  }, []);

  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const handleUserChange = (event) => {
    const value = event.target.value;
    if (value.length >= 8 || value == '') {
      setUserValid(true);
    } else {
      setUserValid(false);
    }
    let matches = [];
    if (value.length > 0) {
      matches = searchResult.filter((usr) => {
        const regex = new RegExp(`${value}`, 'gi');
        return usr.username.match(regex);
      });
    }
   
      setAccount({
        ...account,
        user: value,
      });
   
    setSuggestion(matches);
    setShowSuggest(true);
  };

  const hideSuggest = () => {
    setShowSuggest(false);
  };

  const chooseSuggest = (text) => {
    setAccount({
      ...account,
      user: text,
    })
  };

  const handlePassChange = (event) => {
    const value = event.target.value;

    if ((value.match(passw) && value.length >= 8) || value == '') {
      setPassValid(true);
    } else {
      setPassValid(false);
    }
      setAccount({
        ...account,
        pass: value,
      });
  }

  function showPass() {
    setHidden((prev) => !prev);
  }

  return (
    <div className={cx('container')} onClick={hideSuggest}>
      <div className={cx('title')}>Log in</div>
      <div className={cx('loginField')}>
        <div className={cx('userNameChoice')}>
          <div style={{ marginRight: '150px' }}>Email or Username</div>
          <div>Log in with phone</div>
        </div>
        <div className={cx('loginDetail')}>
          <div className={userValid ? cx('userName') : cx('userNameFalse')}>
            <input type="text" style={{ width: '80%' }} onChange={handleUserChange} value={account.user}></input>
          </div>
          <div className={cx('suggestions')}>
            {showSuggest
              ? suggestion.map((suggest, i) => (
                  <div key={i} className={cx('suggestion')} onClick={chooseSuggest(suggest.username)}>
                    {suggest.username}
                  </div>
                ))
              : ''}
          </div>
          <div style={{ color: 'red' }}>{userValid ? '' : 'Your username is invalid!'}</div>
          <div className={passValid ? cx('passWord') : cx('passWordFalse')}>
            <input type={hidden ? 'password' : 'text'} style={{ width: '80%' }} onChange={handlePassChange}></input>
            {hidden ? (
              <span onClick={showPass}>
                <RiEyeCloseLine style={{ cursor: 'pointer' }}></RiEyeCloseLine>
              </span>
            ) : (
              <RiEyeFill style={{ cursor: 'pointer' }} onClick={showPass}></RiEyeFill>
            )}
          </div>
          <div style={{ color: 'red' }}>{passValid ? '' : 'Your password is invalid!'}</div>
        </div>
        <div className={cx('forgotPass')}>Forgot passWord?</div>
        <button className={cx('loginButton')} type="submit">
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
          Bạn không có tài khoản? <a style={{ color: 'rgba(254,44,85,1)', cursor: 'pointer' }}> Đăng kí</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

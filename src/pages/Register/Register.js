import React, { useEffect, useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineScan } from 'react-icons/ai';
import { BsApple, BsFillEyeSlashFill, BsGoogle, BsFacebook } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Register = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(false);
  const navigate=useNavigate();


  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  
  const submitRegister = async (e) => {
    if (email===''&& username===''&& password==='') {
      alert('Bạn phải nhập đầy đủ!');
    
    } else {
      // e.preventDefault();
      const res = await fetch('https://63fb4ba12027a45d8d63d560.mockapi.io/accouttiktok', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      alert('Đăng ký thành công!')
      navigate('/login')
    }
  };


  const handleShowpass = () => {
    setHidden(hidden === false ? true : false);
  };

  const inputUser = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const inputEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const inputPassword = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (value.match(passw) && value.length >= 8) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>Register</div>
        <div className={cx('loginField')}>
          <div className={cx('register-form')}>
            <p>Username</p>
            <input value={username} type="text" onChange={inputUser}></input>
            {/* {!name && <span className={cx('error')}>Tên đăng nhập phải từ 4 ký tự trở lên!</span>} */}
            <p>Email</p>

            <input value={email} type="email" pattern=".+@gmail\.com" onChange={inputEmail}></input>
            <p>Password</p>

            <div className={cx('pass-show')}>
              <input value={password} type={hidden ? 'text' : 'password'} onChange={inputPassword}></input>
              {!error && (
                <span className={cx('error')}>
                  Mật khẩu phải đủ 8 ký tự trở lên và gồm ký tự như chữ hoa, ký tự đặc biệt, từ 0-9!
                </span>
              )}
              {hidden ? (
                <span onClick={handleShowpass} className={cx('icon-show')}>
                  <BsFillEyeSlashFill />
                </span>
              ) : (
                <span onClick={handleShowpass} className={cx('icon-show')}>
                  <IoEyeSharp />
                </span>
              )}
            </div>
          </div>
          <button className={cx('loginLink')} type="submit" onClick={submitRegister}>
           Register
          </button>

          <div className={cx('signUp')}>
            Bạn có tài khoản?{' '}
            <Link to="/login" style={{ color: 'rgba(254,44,85,1)', cursor: 'pointer' }}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

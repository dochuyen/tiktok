import React, { useState, useEffect } from 'react';

import { BiEdit, BiEditAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import { AvatarModal } from 'components/Avatar/Avatar';
const cx = classNames.bind(styles);

function ModalMy() {
  <AvatarModal></AvatarModal>;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= 150) {
      setInputValue(newValue);
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = { username, name, bio };
    fetch('https://63fa02d9897af748dcc7907c.mockapi.io/account', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    console.log(name);
  };

  return (
    <div>
      <button className={cx('btn-modal')} onClick={handleEditClick}>
        <BiEdit />
        Sửa hồ sơ
      </button>
      {isModalOpen && (
        <div className={cx('modal')}>
          <div onClick={handleEditClick} className={cx('overlay')}></div>
          <div className={cx('modal-content')}>
            <form action="" onChange={handleSubmit}>
              <div className={cx('header-modal')}>
                <h1>Sửa hồ sơ</h1>
                <button onClick={handleEditClick}>
                  <GrClose />
                </button>
              </div>
              <hr />
              <div className={cx('info-user')}>
                <label for="name">Ảnh hồ sơ :</label>
                <div className={cx('info')}>
                  <AvatarModal></AvatarModal>
                </div>
              </div>
              <hr />

              <div className={cx('info-user')}>
                <label for="name">Tiktok ID:</label>
                <div className={cx('info')}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="TikTok ID "
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <h6>
                    TikTok ID chỉ có thể bao gồm chữ cái, chữ số, dấu gạch dưới và dấu chấm. Khi thay đổi TikTok ID,
                    liên kết hồ sơ của bạn cũng sẽ thay đổi.
                  </h6>
                </div>
              </div>
              <hr />
              <div className={cx('info-user')}>
                <label for="name">Tên:</label>
                <div className={cx('info')}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <h6>Bạn chỉ có thể thay đổi biệt danh 7 ngày một lần.</h6>
                </div>
              </div>
              <hr />
              <div className={cx('info-user')}>
                <label for="bio">Tiểu sử:</label>
                <div className={cx('info')}>
                  <p> {inputValue.length}/150</p>
                  <textarea
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    placeholder="Your bio"
                  />
                </div>
              </div>
              <hr />
              <div className={cx('footer-modal')}>
                <button type="close" onClick={handleEditClick}>
                  Hủy
                </button>

                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ModalMy;

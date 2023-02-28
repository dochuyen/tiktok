import React, { useState } from 'react';

import { BiEdit, BiEditAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
const cx = classNames.bind(styles);

function ModalMy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsModalOpen(!isModalOpen);
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
                <img
                  className={cx('avatar')}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EACwQAAICAQMCBQMEAwAAAAAAAAABAgMRBCExBRIiQVFhcTJSYhMUkdEjobH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APpgANMgAAAGdVU7pdtcXJgYA3F06/bPas878G3DplKXicpP1zgaqoBa2dLra/xzcX77or76LKJdtixnh+TGiIABAAAAAAAAAAASUVO+2NcfPz9C9qqhVWoQWEv9mn0mntrdr5lsvg3yVYAAihhbXG2twmspmYA5++qVFrrl5cP1RGW3Vae6pWrmHPwVJqIAAIAAAAAB6k20lyzwl0qzqak/vQF7XBV1xguIrBkAZaAAAAAGNkVOEoPiSwc81h4fKOjOf1KxqbV5d7/6WJUYAKgAAAAAEuleNTU/zREe5aaa5W6A6MGNc1ZXGa4ksoyMtAAAAAAc9bLvtnL7pNl7fLsosl6RbOfXBYlAAVAAAAAAPcN7JZb8jw9TaacW01w0KL/TQdenrhLmMcMkKenqF8NpOMl6yX9FhHW6eTSVicnthJ8mWmwAAABry1tEXKLsSksrDTAk1EHbROC5ksIoGmm1JYa5Rt3dQvllRcYr8Uajbk25NtvlsqPAAVAAAAAAAAAm0ce/V1L8s/xuQlp0zTShm6xNNrEUxVWAAMqFFrYdmrtXrLP87l6V/U9NKeLq020sSS8ywVYAKyAAAAAABs6HTfuLfF9Efq/oKhrqsteK4uXwbtXTJve2aj7R3ZZxjGEVGKSiuEj0mmIKdJTTvGGZfc92TgEUAAAAAQXaSm7ecPF9y2ZpW9Mmt6pqXtLZloAOetqsqeLIOPyYHRyjGcXGSTT8mUuu037ezw/RLj29i6jWABUC80NX6OmiseJ7sAlWNgAEUAAAAAAAAAAAg1tP62nkl9S3XyABRIAGmX//2Q=="
                  alt="avatar"
                />
                <input type="file" id="upload" hidden />
                <label for="upload">
                  <BiEditAlt />
                </label>
              </div>
            </div>
            <hr />

            <div className={cx('info-user')}>
              <label for="name">Tiktok ID:</label>
              <div className={cx('info')}>
                <input type="text" id="name" name="name" placeholder="TikTok ID " />
                <h6>
                  TikTok ID chỉ có thể bao gồm chữ cái, chữ số, dấu gạch dưới và dấu chấm. Khi thay đổi TikTok ID, liên
                  kết hồ sơ của bạn cũng sẽ thay đổi.
                </h6>
              </div>
            </div>
            <hr />
            <div className={cx('info-user')}>
              <label for="name">Tên:</label>
              <div className={cx('info')}>
                <input type="text" id="name" name="name" placeholder="Your name" />
                <h6>Bạn chỉ có thể thay đổi biệt danh 7 ngày một lần.</h6>
              </div>
            </div>
            <hr />
            <div className={cx('info-user')}>
              <label for="bio">Tiểu sử:</label>
              <div className={cx('info')}>
                <textarea id="bio" name="bio" placeholder="Your bio" />
              </div>
            </div>
            <hr />
            <div className={cx('footer-modal')}>
              <button type="close" onClick={handleEditClick}>
                Hủy
              </button>
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMy;

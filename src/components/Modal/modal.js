import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './modal.module.scss';
Modal.setAppElement('#root');

function ModalMy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleEditClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleEditClick}>Chỉnh sửa</button>
      <Modal  isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h1>Sửa Hồ Sơ</h1>
        <hr style={{ color: '#222' }} />

        <form>
          {/* Form để chỉnh sửa thông tin */}
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Your username" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />

          <label for="bio">Bio:</label>
          <textarea id="bio" name="bio" placeholder="Your bio"></textarea>
          <button onClick={handleCloseModal}>Đóng</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalMy;

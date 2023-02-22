import React, { useState } from 'react';


import classNames from 'classnames/bind';
import styles from './modal.module.scss'
const cx = classNames.bind(styles);


function ModalMy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditClick =()=>{
    setIsModalOpen(!isModalOpen);
  }

  function handleEditClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleEditClick}  >Sửa hồ sơ</button>
      {modal &&C
       <div className={cx("modal")}>
        <div onClick={handleEditClick } className={cx("overlay")}>

        </div>
        <div className={cx("modal-content")}>
           <h1>Sửa hồ sơ</h1>
           <hr />
           <div>
              <img src="" alt="" />
           </div>
        <div>
          
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name"/>

          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Your username"/>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email"/>

          <label for="bio">Bio:</label>
          <textarea id="bio" name="bio" placeholder="Your bio"></textarea>
        
         <button type="submit">Save</button>
       </div>


        </div>
       </div>
      }
      
    </div>
  );
}

export default ModalMy;

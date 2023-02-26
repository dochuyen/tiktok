import React, { useState, useRef } from 'react';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import Footer from './Footer';
import Login from 'pages/Login/Login';
import Toggle from './Toggle';

const cx = classNames.bind(styles);
const UpLoad = () => {
  const [charNumber, setCharNumber] = useState(0);

  const handleRecivedFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  const handleCharNumber = (event) => {
    const value = event.target.value;
    const num = value.length;
    setCharNumber(num);
  };
  return (
    <div>
      <div className={cx('uploadContainer')}>
        <div className={cx('title')}>
          <div className={cx('bigTitle')}>Tải video lên</div>
          <div className={cx('smallTitle')}>Đăng video vào tài khoản của bạn</div>
        </div>
        <div className={cx('uploadBody')}>
          <div className={cx('uploadField')}>
            <div className={cx('uploadIcon')}>
              <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"></img>
            </div>
            <div className={cx('uploadFieldBody')}>
              <div className={cx('uploadFieldTitle')}>
                <div className={cx('uploadFieldBigTitle')}>Chọn video để tải lên</div>
                <div className={cx('uploadFieldSmallTitle uploadContent')}>Hoặc kéo và thả tập tin</div>
              </div>
              <div className={cx('uploadFieldContent')}>
                <div className={cx('uploadContent')}>MP4 hoặc WebM</div>
                <div className={cx('uploadContent')}>Độ phân giải 720x1280 trở lên</div>
                <div className={cx('uploadContent')}>Tối đa 30 phút</div>
                <div className={cx('uploadContent')}>Nhỏ hơn 2 GB</div>
              </div>
              <button className={cx('uploadBtn')}>
                <input onChange={handleRecivedFile} type="file" id="upload" hidden />
                <label htmlFor="upload">Chọn tập tin</label>
              </button>
            </div>
          </div>
          <div className={cx('adjustField')}>
            <div className={cx('fixField')}>
              <div className={cx('fixIcon')}>
                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg"></img>
              </div>
              <div className={cx('fixContent')}>
                <div className={cx('fieldTile')}>Chia video và chỉnh sửa</div>
                <div className={cx('fieldContent')}>
                  Bạn có thể nhanh chóng phân chia video thành nhiều phần, loại bỏ các phần thừa và chuyển video ngang
                  thành video dọc
                </div>
              </div>
              <button className={cx('btn')}>Chỉnh sửa</button>
            </div>

            <div className={cx('noteField')}>
              <div className={cx('noteContent')}>
                <div className={cx('fieldTile')}>Chú thích</div>
                <div className={cx('numberOfChar')}>{charNumber}/150</div>
              </div>
              <div className={cx('inputNote')}>
                <input type="text" style={{ width: '100%' }} onChange={handleCharNumber}></input>
                <div>
                  <span className={cx('inputNoteChoice')}>@</span>
                  <span className={cx('inputNoteChoice')}>#</span>
                </div>
              </div>
            </div>

            <div className={cx('coverField')}>
              <div className={cx('fieldTile')}>Ảnh bìa</div>
              <div className={cx('cover')}></div>
            </div>

            <div className={cx('restrictField')}>
              <div className={cx('fieldTile')}>Ai có thể xem video này</div>
              <select className={cx('restrictOption')}>
                <option className={cx('Option')}>Công khai</option>
                <option className={cx('Option')}>Bạn bè</option>
                <option className={cx('Option')}>Riêng tư</option>
              </select>
            </div>

            <div className={cx('allow')}>
              <div className={cx('fieldTile')}>Cho phép người dùng:</div>
              <div className={cx('allowChoices')}>
                <input type="checkbox" name="vehicle1" className={cx('checkbox1')}></input>
                <label htmlFor="vehicle1">Bình luận</label>

                <input type="checkbox" name="vehicle1" className={cx('checkbox1')}></input>
                <label htmlFor="vehicle1">Duet</label>

                <input type="checkbox" name="vehicle1" className={cx('checkbox1')}></input>
                <label htmlFor="vehicle1">Stitch</label>
              </div>
            </div>

            <div className={cx('author')}>
              <div className={cx('authorHead')}>
                <div className={cx('fieldTile')}>Chạy quy trình kiểm tra bản quyền</div>
                <Toggle></Toggle>
              </div>
              <div className={cx('fieldContent')}>
                Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền hay không. Nếu chúng tôi
                phát hiện có vi phạm, bạn có thể chỉnh sửa video trước khi đăng
              </div>
            </div>

            <div className={cx('buttons')}>
              <button className={cx('cancelBtn')}>Hủy Bỏ</button>
              <button className={cx('btn')}>Đăng</button>
            </div>
          </div>
        </div>
      </div>

      
      <Footer></Footer>
    </div>
  );
};

export default UpLoad;

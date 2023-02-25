import React from 'react';
import images from '/assets/images';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
    
    return (
        <div className={cx('container')}>
        <div className={cx('footerContent')}>
             <Link to="/" className={cx('logo')}>
          <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg' alt="TikTok" />
          </Link>
          <div className={cx('footerItems')}>
            <div className={cx('footerItem')}>
                <ul>
                <span style={{fontWeight:'1000',}}> Công Ty</span>
                    <li><a>Giới thiệu</a></li>
                    <li><a>Bảng tin</a></li>
                    <li><a>Liên hệ</a></li>
                    <li><a>Sự nghiệp</a></li>
                    <li><a>ByteDance</a></li>
                </ul>
            </div>
            <div className={cx('footerItem')}> <ul>
            <span style={{fontWeight:'1000',}}> Chương Trình</span>
                    <li><a>Tiktok for Good</a></li>
                    <li><a>Quảng cáo</a></li>
                    <li><a>Developers</a></li>
                    <li><a>TikTok Rewards</a></li>
                    <li><a>TikTok Embeds</a></li>
                </ul>
                </div>
                <div className={cx('footerItem')}>
            <ul>
            <span style={{fontWeight:'1000',}}>Hỗ trợ</span>
                    <li><a>Trung tâm trợ giúp</a></li>
                    <li><a>Trung tâm An toàn</a></li>
                    <li><a>Creator Portal</a></li>
                    <li><a>Hướng dẫn Cộng đồng</a></li>
                    <li><a>Minh bạch</a></li>
                </ul>
            </div>

            <div className={cx('footerItem')}> <ul>
            <span style={{fontWeight:'1000',}}> Pháp lý</span>
                    <li><a>Terms of Use</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</a></li>
                </ul>
                </div>
          </div>       
</div>

<div className={cx('footerEnd')}>
<select className={cx('language')}>
    <option>Tiếng Việt (Việt Nam)</option>
    <option>English (UK)</option>
    <option>English (USA)</option>
    <option>한국어 (대한민국)</option>
</select>
    <span className={cx('authority')}>© 2023 TikTok</span>
</div>
        </div>
    );
};

export default Footer;
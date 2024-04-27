import { faBookmark, faComment, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import images from "~/assets/images";
import { Link } from "react-router-dom";
import config from "~/Config"

const cx = classNames.bind(styles);

const VideoInfo = () => {
    return <div className={cx('info-wrapper')}>
        <img src={images.logo} alt="avt" className={cx('info-img')} />
        <div className={cx('info-content')}>
            <div className={cx('text')}>
                <Link className={cx('logo-link')} to={config.routes.profile}><span className={cx('text-info')} >Anyone Account</span></Link>
                <span>Anyone nickname</span>
            </div>
            <div>
                Content going here
            </div>
            <div className={cx('text2')}>
                <FontAwesomeIcon icon={faMusic} />
                <span className={cx('text2-info')}>Original sound</span>
            </div>
        </div>
        <div><button className={cx('follow-btn')}>Follow</button></div>
    </div>
}

const VideoContent = () => {
    return (
    <div className={cx('content')}>
        <img 
        className={cx('video')}
        src="https://i.ytimg.com/vi/O2qrj5Fj3dY/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLADpX8rs2yp6uNS_Gxm4dGCzrHDJQ" 
        alt='video' />
        <div className={cx('icon')}>
            <div className={cx('icon-info')}>
                <div className={cx('content-icon')}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>100</span>
            </div>
            <div className={cx('icon-info')}>
                <div className={cx('content-icon')}>
                    <FontAwesomeIcon icon={faComment} />
                </div>
                <span>100</span>
            </div>
            <div className={cx('icon-info')}>
                <div className={cx('content-icon')}>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span>100</span>
            </div>
            <div className={cx('icon-info')}>
                <div className={cx('content-icon')}>
                    <FontAwesomeIcon icon={faShare} />
                </div>
                <span>100</span>
            </div>
        </div>
    </div>)
}

function Video() {
    return (
        <div className={cx('video-wrapper')}>
            <VideoInfo />
            <VideoContent />

        </div>
    )
}

export default Video

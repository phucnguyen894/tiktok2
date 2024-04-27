import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faLock, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

const UpperInfo = () => {
    return <div className={cx('info-wrapper')}>
        <div className='info-top'>
            <div className={cx('info-content')}>
                <img src={images.logo} alt="avt" className={cx('info-img')} />
                <div className={cx('text')}>
                    <h1 className={cx('text-1')} >Anyone</h1>
                    <h2 className={cx('text-2')}>
                        Anyone nickname
                    </h2>
                    <Button primary className={cx('follow-btn')}>Follow</Button>
                </div>
            </div>
            <p className={cx('analytic')}>
                <strong className={cx('value')}>700 </strong>
                <span className={cx('label')}>Following</span>
                <strong className={cx('value')}>8000 </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
            <p className={cx('text-3')}>Bio about Account</p>
        </div>
        <div className='icon'>
            <FontAwesomeIcon icon={faShare} />
            <FontAwesomeIcon icon={faEllipsis} />
        </div>
    </div>
}

function ProfilePage() {
    return (
        <div>
            <UpperInfo />
            <div className={cx('media')}>
                <h2>Videos</h2>
                <div className={cx('lock-icon')}>
                    <FontAwesomeIcon icon={faLock} style={{marginTop:'7px'}}/>
                    <h2>Liked</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

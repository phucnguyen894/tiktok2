import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon } from '~/components/Icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';
import config from "~/Config"

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Languages",
            data: [
                {
                    code: 'en',
                    title: "English",
                },
                {
                    code: 'vi',
                    title: "Vietnamese",
                },
            ]

        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedbacks & helps",
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard Shortcut",
    },
];

const currentUser = true

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View Profile",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coins",
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Setting",
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        to: '/logout',
        separate: true,
    },
]

function Header() {

    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'langague':
                //Handle change languages
                break;
            default:
        }
    };

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link className={cx('logo-link')} to={config.routes.home}> <img src={images.logo} alt='Tiktok' />
            </Link>
            <Search />

            <div className={cx('actions')}>

                {currentUser ? (
                    <>
                        <Tippy content="Upload" placement='bottom' delay={[0, 50]}>
                            <button className={cx('actions-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>

                        <Tippy content="Message" placement='bottom' delay={[0, 50]}>
                            <button className={cx('actions-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>

                    </>

                ) : (
                    <>
                        <Button text> Upload </Button>
                        <Button primary> Log in </Button>

                    </>

                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange()}>
                    {currentUser ? (
                        <img
                            className={cx('user-avartar')}
                            src= {images.logo}
                            alt='Bixtuyen' />
                    ) : (

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}

                </Menu>
            </div>

        </div>
    </header>
}

export default Header;
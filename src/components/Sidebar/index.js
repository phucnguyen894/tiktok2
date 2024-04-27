import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/Config';
import Menu, {MenuItem} from './Menu';
import { HomeActiveIcon, HomeIcon, UserGroupActiveIcon, UserGroupIcon, LiveIcon, LiveActiveIcon } from '../Icons';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {

    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title= "For you" to = {config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>} />
            <MenuItem title= "Following" to = {config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title= "LIVE" to = {config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </Menu>
        <SuggestedAccounts label='Suggested Accounts'/>
        <SuggestedAccounts label='Following Accounts'/>
    </aside>;
}

export default SideBar;
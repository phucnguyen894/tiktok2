import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "./AccountPreview";
import images from "~/assets/images";
// import PropTypes from "prop-types";

const cx = classNames.bind(styles);



function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        );
    };



    return ( 
       <div>
           <Tippy 
           interactive
           delay={[800,0]}
           offset={[-20,5]}
           placement="bottom"
           render={renderPreview}
           >
                <div className={cx('account-item')}>
                   <img
                   className={cx('avatar')}
                   src={images.logo}
                   alt="BixTuyen"
                   />
        
                   <div className={cx('item-info')}>
                    <h4 className={cx('nickname')}>
                        <strong>Anyone Account</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </h4>
                    <p className={cx('name')}>Anyone nickname</p>
        
                   </div>
                </div>
           </Tippy>
       </div>
     );
}

// AccountItem.propTypes ={
    
// }

export default AccountItem;
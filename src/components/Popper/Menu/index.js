import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import Tippy from '@tippyjs/react/headless';
import MenuItem from './Menuitem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const defaulFn = () => { }

function Menu({ children, items = [], onChange = defaulFn, hideOnclick = false }) {

    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item);
                }
            }} />
        });
    };
    
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }

    const handleResetToFirstPage = () => {
        setHistory(prev => prev.slice(0, 1))}

    return (
        <Tippy
            interactive
            hideOnClick={hideOnclick}
            delay={[0, 700]}
            offset={[12, 8]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-items')} tabIndex="-1"{...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header
                            title={current.title}
                            onBack={handleBack}
                        />
                        }
                        <div className={cx('menu-body')}>{renderItems()}</div>

                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnclick: PropTypes.bool,
}

export default Menu;
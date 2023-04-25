import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './SuggestAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview />
                </PropperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[1000, 0]} offset={(-20, 0)} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f161a1c6f3837b1b7179decefa166a9~c5_100x100.jpeg?x-expires=1680159600&x-signature=MZnKU5DJIxWyU9GoM90uBlzp1gw%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>mangdeptrai</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Hữu Mãng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

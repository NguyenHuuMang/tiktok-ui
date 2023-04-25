import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f161a1c6f3837b1b7179decefa166a9~c5_100x100.jpeg?x-expires=1680159600&x-signature=MZnKU5DJIxWyU9GoM90uBlzp1gw%3D"
                    alt=""
                />
                <div className={cx('follow-btn')}>
                    <Button primary>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>mangdeptrai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Hữu Mãng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>17.1M </strong>
                    <span className={cx('label')}>Follower </span>
                    <strong className={cx('value')}>171.0M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

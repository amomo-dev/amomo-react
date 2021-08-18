import styles from './AlertBar.module.scss';

import noticeIconPath from 'assets/images/megaphone.svg';

export function AlertBar({ noticeText }) {
  return (
    <div className={styles.alert_bar}>
      <img src={noticeIconPath} alt="공지사항" />
      <p>{noticeText}</p>
      <button type="button" aria-label="닫기">
        X
      </button>
    </div>
  );
}

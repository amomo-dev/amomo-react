import styles from './TeamCard.module.scss';

import teamThumbnailPath from 'assets/images/thumb_동물의숲.png';

export function TeamCard({ teamInfo }) {
  const { title, currentCount, maxCount } = teamInfo;
  return (
    <a href="/" className={styles.card}>
      <img src={teamThumbnailPath} alt="00팀" />
      <div className={styles.card_text}>
        <h2 className={styles.team_title}>{title}</h2>
        <span className={styles.team_count}>
          {currentCount} / {maxCount} (명)
        </span>
        <span className={styles.card_writer}>작성자: 아모모</span>
      </div>
    </a>
  );
}

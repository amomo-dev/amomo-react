import styles from './TeamCard.module.scss';

import teamThumbnailPath from 'assets/images/thumb_동물의숲.png';

export function TeamCard({ teamInfo }) {
  const {
    name,
    title,
    rank,
    currentCount,
    count: maxCount,
    game: gameName,
  } = teamInfo;
  return (
    <a href="/" className={styles.card}>
      <img src={teamThumbnailPath} alt={gameName} />
      <div className={styles.card_info}>
        <span className={styles.team_name}>{name}</span>
        <h2 className={styles.team_title}>{title}</h2>
        <div className={styles.team_condition}>
          <span className={styles.team_rank}>랭크: {rank}</span>
          <span className={styles.team_count}>
            {currentCount} / {maxCount} (명)
          </span>
        </div>
      </div>
    </a>
  );
}

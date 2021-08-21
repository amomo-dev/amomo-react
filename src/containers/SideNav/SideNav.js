import styles from './SideNav.module.scss';

import teamImagePath from 'assets/images/teams.svg';
import goToTopImagePath from 'assets/images/topArrow.svg';

export function SideNav() {
  return (
    <aside className={styles.side_nav}>
      <button className={styles.button}>
        <img src={teamImagePath} alt="팀 관리" />
        <span>team</span>
      </button>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={styles.button}
      >
        <img src={goToTopImagePath} alt="맨 위로" />
        <span>top</span>
      </button>
    </aside>
  );
}

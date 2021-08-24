import styles from './Main.module.scss';

import bannerImagePath from 'assets/images/mainBanner.png';
import ballonImagePath from 'assets/images/bannerText.svg';
import searchIconPath from 'assets/images/search.png';

import { useState, useEffect } from 'react';
import { ReactComponent as SvgIconArrow } from 'assets/images/arrow.svg';
import { TeamCard, Button } from 'components';
import requestTeam from 'server/team-api';

export function Main() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamData = await requestTeam.get();
      setTeams(teamData.filter((team) => team.isPublic === 'Y'));
    };
    fetchTeams();
  }, []);

  return (
    <div className={styles.content_wrap}>
      <div className={styles.banner}>
        <img src={bannerImagePath} alt="" style={{ width: '100%' }} />
        <img
          src={ballonImagePath}
          alt="당신의 전장에 친구가 필요한 순간 아모모가 당신에게 꼭 맞는 친구를 찾아드립니다!"
          className={styles.banner_balloon}
        />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="검색하기"
        />
        <button>
          <img src={searchIconPath} alt="검색" />
        </button>
      </div>
      <ul className={styles.tag_group}>
        <li>
          <button type="button">&#35;LOL</button>
        </li>
        <li>
          <button type="button">&#35;POE</button>
        </li>
        <li>
          <button type="button">&#35;스타크래프트</button>
        </li>
        <li>
          <button type="button">&#35;마인크래프트</button>
        </li>
      </ul>
      <div className={styles.search_top}>
        <p>검색결과: 00건</p>
        <Button className={styles.make_team_btn}>팀 등록</Button>
      </div>
      {teams.length === 0 && (
        <div className={`${styles.cards} ${styles.nothing}`}>
          팀이 없습니다😅
          <br />
          새로운 팀을 만들고 친구를 만나보세요🧚‍♀️
        </div>
      )}
      {teams.length !== 0 && (
        <div className={styles.cards}>
          {teams.map((team) => (
            <TeamCard teamInfo={team} />
          ))}
        </div>
      )}
      <div className={styles.pagination}>
        <button type="button" aria-label="이전">
          <SvgIconArrow className={styles.prev} />
        </button>
        <button type="button" aria-label="다음">
          <SvgIconArrow className={styles.next} />
        </button>
      </div>
    </div>
  );
}

import styles from './Main.module.scss';

import bannerImagePath from 'assets/images/mainBanner.png';
import ballonImagePath from 'assets/images/bannerText.svg';
import searchIconPath from 'assets/images/search.png';

import { ReactComponent as SvgIconArrow } from 'assets/images/arrow.svg';
import { TeamCard } from 'components';
import requestTeam from 'service/team-api';

(async () => {
  const data1 = await requestTeam.get();
  console.log(data1);
  const data2 = await requestTeam.getById('6123f8cced40093dd4ddb8e3');
  console.log(data2);
})();

const teamData = [
  { title: '팀 타이틀', currentCount: 2, maxCount: 10 },
  { title: '팀 타이틀', currentCount: 3, maxCount: 10 },
  { title: '팀 타이틀', currentCount: 4, maxCount: 10 },
  { title: '팀 타이틀', currentCount: 5, maxCount: 10 },
  { title: '팀 타이틀', currentCount: 6, maxCount: 10 },
];
export function Main() {
  return (
    <div className={styles.content_wrap}>
      <div className={styles.banner}>
        <img src={bannerImagePath} alt="" />
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
        <button className={styles.btn_primary}>팀 등록</button>
      </div>
      <hr />
      <div className={styles.cards}>
        {teamData.map((team) => (
          <TeamCard teamInfo={team} />
        ))}
      </div>
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

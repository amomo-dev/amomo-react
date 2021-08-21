import styles from './MakeTeam.module.scss';

import { useState } from 'react';
import { A11yHidden, Button } from 'components';

const games = [
  { id: 0, name: '오버워치' },
  { id: 1, name: 'LOL' },
  { id: 2, name: '동물의 숲' },
  { id: 3, name: '마인크래프트' },
  { id: 4, name: '기타' },
];

const ranks = [
  { id: 0, name: '랭크 없음' },
  { id: 1, name: '브론즈' },
  { id: 2, name: '실버' },
  { id: 3, name: '골드' },
  { id: 4, name: '플래티넘' },
  { id: 5, name: '다이아(이상)' },
];

export function MakeTeam() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  return (
    <div className={styles.team_regist}>
      <h2 className={styles.page_title}>팀 등록하기</h2>
      <form className={styles.team_regist_form}>
        <fieldset>
          <A11yHidden as="legend">팀 등록 폼</A11yHidden>
          <div className={`${styles.input_wrap} ${styles.full}`}>
            <label htmlFor="teamName" className={styles.input_label}>
              팀명
            </label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              className={styles.input_text}
              placeholder="4 ~ 10 자로 입력해주세요"
              minLength="4"
              maxLength="10"
              required
              autoFocus={true}
            />
          </div>
          <div className={`${styles.input_wrap} ${styles.full}`}>
            <label htmlFor="teamTitle" className={styles.input_label}>
              제목
            </label>
            <input
              type="text"
              name="teamTitle"
              id="teamTitle"
              className={styles.input_text}
              placeholder="4 ~ 30 자로 입력해주세요"
              minLength="4"
              maxLength="30"
              required
            />
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="game" className={styles.input_label}>
              게임
            </label>
            <select id="game" className={styles.select_box}>
              {games.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="teamMemCnt" className={styles.input_label}>
              팀 인원 수
            </label>
            <select id="teamMemCnt" className={styles.select_box}>
              {Array.from({ length: 8 }, (_, i) => i + 2).map((count) => (
                <option value={count} key={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="rank" className={styles.input_label}>
              랭크
            </label>
            <select id="rank" className={styles.select_box}>
              {ranks.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="public" className={styles.input_label}>
              공개
            </label>
            <select id="public" className={styles.select_box}>
              <option value={true}>공개</option>
              <option value={false}>비공개</option>
            </select>
          </div>
          <Button
            type="submit"
            className={styles.submit_btn}
            disabled={isSubmitDisabled}
          >
            등록하기
          </Button>
        </fieldset>
      </form>
    </div>
  );
}

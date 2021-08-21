import styles from './MakeTeam.module.scss';

import { useState } from 'react';
import { A11yHidden, Button, Input, Select } from 'components';

import { games, ranks, memCount, publicSetting } from './select_option';

export function MakeTeam() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  return (
    <div className={styles.team_regist}>
      <h2 className={styles.page_title}>팀 등록하기</h2>
      <form className={styles.team_regist_form}>
        <fieldset>
          <A11yHidden as="legend">팀 등록 폼</A11yHidden>
          <Input
            id="teamName"
            label="팀명"
            labelClassName={styles.input_label}
            placeholder="4 ~ 10 자로 입력해주세요"
            className={`${styles.input_wrap} ${styles.full}`}
            inputClassName={styles.input_text}
            minLength="4"
            maxLength="10"
            required
            autoFocus={true}
          />
          <Input
            id="teamTitle"
            label="팀명"
            labelClassName={styles.input_label}
            placeholder="4 ~ 30 자로 입력해주세요"
            className={`${styles.input_wrap} ${styles.full}`}
            inputClassName={styles.input_text}
            minLength="4"
            maxLength="30"
            required
          />
          <Select
            id="game"
            label="게임"
            optionData={games}
            className={styles.input_wrap}
            labelClassName={styles.input_label}
            selectClassName={styles.select_box}
          />
          <Select
            id="teamMemCnt"
            label="팀 인원 수"
            optionData={memCount}
            className={styles.input_wrap}
            labelClassName={styles.input_label}
            selectClassName={styles.select_box}
          />
          <Select
            id="rank"
            label="랭크"
            optionData={ranks}
            className={styles.input_wrap}
            labelClassName={styles.input_label}
            selectClassName={styles.select_box}
          />
          <Select
            id="public"
            label="공개"
            optionData={publicSetting}
            className={styles.input_wrap}
            labelClassName={styles.input_label}
            selectClassName={styles.select_box}
          />
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

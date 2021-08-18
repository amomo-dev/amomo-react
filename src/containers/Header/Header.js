import styles from './Header.module.scss';

import logoImagePath from 'assets/images/logo.png';

import { useState } from 'react';

export function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className={styles.menus}>
      <h1 className={styles.logo}>
        <a href="/">
          <img src={logoImagePath} alt="아모모" />
        </a>
      </h1>
      <ul className={styles.util}>
        <li>
          {!isLogin && <a href="/">로그인</a>}
          {isLogin && <a href="/">로그아웃</a>}
        </li>
        <li>
          <a href="/">이용안내</a>
        </li>
      </ul>
      <ul className={styles.gnb}>
        <li>
          <a href="/">game</a>
        </li>
        <li>
          <a href="/">project</a>
        </li>
        <li>
          <a href="/">community</a>
        </li>
        <li>
          <a href="/">notice</a>
        </li>
      </ul>
    </header>
  );
}

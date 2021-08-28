import styles from './Header.module.scss';

import logoImagePath from 'assets/images/logo.png';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="/">
          <img src={logoImagePath} alt="아모모" />
        </a>
      </h1>
      <ul className={styles.util}>
        <li>
          {!isLogin && <Link to="/login">로그인</Link>}
          {isLogin && <Link to="/">로그아웃</Link>}
        </li>
        <li>
          <Link to="/">이용안내</Link>
        </li>
      </ul>
      <ul className={styles.gnb}>
        <li>
          <NavLink to="/">game</NavLink>
        </li>
        <li>
          <NavLink to="/">project</NavLink>
        </li>
        <li>
          <NavLink to="/">community</NavLink>
        </li>
        <li>
          <NavLink to="/">notice</NavLink>
        </li>
      </ul>
    </header>
  );
}

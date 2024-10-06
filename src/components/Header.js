// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo"><a href="/">蒼ほっぺ</a></h1>
      <ul className="header__list">
        <li>
          <a href="/news.html">ニュース</a>
        </li>
        <li>
          <a href="#about">蒼ほっぺとは</a>
        </li>
        <li>
          <a href="#contact">お問い合わせ</a>
        </li>
      </ul>
      <div className="header__nav"></div>
    </header>
  );
};

export default Header;

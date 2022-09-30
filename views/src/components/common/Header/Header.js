import React from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  // const {pathname} = window.location;

  return (
    <header>
      <div className={cx('top-menu')}>
        {/* <a href="./index.html"> */}
          <div className={cx('logo')}>
            <div className={cx('title')}>
              <span className={cx('main-title')}>이터인포</span>
              <span className={cx('sub-title')}>이터널시티의 모든정보</span>
            </div>
          </div>
        {/* </a> */}
        <div className={cx('menu')}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={cx('bottom-menu')}>
        <ul>
          <li className={cx('menu-item')}><Link to="/wp">아이템DB</Link></li>
          <li className={cx('menu-item')}><a href="./frienddb.html"></a>용병DB</li>
          <li className={cx('menu-item')}><a href="./skilldb.html"></a>스킬DB</li>
          <li className={cx('menu-item')}><a href="./monsterdb.html"></a>몬스터DB</li>
          <li className={cx('menu-item')}><a href="./guide.html"></a>가이드</li>
          <li className={cx('menu-item')}><a href="./simulation.html"></a>시뮬레이션</li>
          <li className={cx('menu-item')}><a href="./comunity.html"></a>커뮤니티</li>
        </ul>
      </div>
      <div className={cx('gradient')}></div>
    </header>
  );
};

export default Header;
import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
// import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <div className={cx('main')}>
      {children}
    </div>
    {/* <Footer/> */}
  </div>
);

export default PageTemplate;
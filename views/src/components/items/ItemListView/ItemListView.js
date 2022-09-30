import React from 'react';
import styles from './ItemListView.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGun, faGavel, faShieldHalved, faShirt, faRing, faDragon, faFilter
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ItemListView = ({itemList}) => {
  const {list01, list02, list03, list04, list05, list06} = itemList;
  console.log(list01);
  return (
    <section className={cx('main-contents')}>
      {JSON.stringify(list01)}
    </section>
  );
}

export default ItemListView;
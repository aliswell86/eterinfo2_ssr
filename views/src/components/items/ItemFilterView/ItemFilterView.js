import React from 'react';
import styles from './ItemFilterView.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGun, faGavel, faShieldHalved, faShirt, faRing, faDragon, faFilter
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ItemFilterView = ({onChangeItemKind, itemFilters}) => {
  const {itemKind} = itemFilters;
  
  return (
    <section className={cx('main-contents')}>
      <div className={(cx('h1-title'))}>아이템DB</div>
      <div className={cx('itemkind')}>
        <ul>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="01" id="itemkind_radio1" />
            <label htmlFor="itemkind_radio1">
              <span>
                <FontAwesomeIcon icon={faGun} />
                <div>원거리무기</div>
              </span>
            </label>
          </li>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="02" id="itemkind_radio2" />
            <label htmlFor="itemkind_radio2">
              <span>
                <FontAwesomeIcon icon={faGavel} />
                <div>근접무기</div>
              </span>
            </label>
          </li>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="03" id="itemkind_radio3" />
            <label htmlFor="itemkind_radio3">
              <span>
                <FontAwesomeIcon icon={faShieldHalved} />
                <div>방패</div>
              </span>
            </label>
          </li>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="04" id="itemkind_radio4" />
            <label htmlFor="itemkind_radio4">
              <span>
                <FontAwesomeIcon icon={faShirt} />
                <div>방어구</div>
              </span>
            </label>
          </li>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="05" id="itemkind_radio5" />
            <label htmlFor="itemkind_radio5">
              <span>
                <FontAwesomeIcon icon={faRing} />
                <div>악세서리</div>
              </span>
            </label>
          </li>
          <li>
            <input type="radio" name="itemkind" onChange={onChangeItemKind} value="06" id="itemkind_radio6" />
            <label htmlFor="itemkind_radio6">
              <span>
                <FontAwesomeIcon icon={faDragon} />
                <div>코스튬날개</div>
              </span>
            </label>
          </li>
        </ul>
      </div>

      <h2>
      <FontAwesomeIcon icon={faFilter} />
        <span>Show Filters</span>
      </h2>

      <div className={cx('filter-view')}>
        <ul>
          <li>
            <input type="checkbox" id="filter_check11" />
            <label htmlFor="filter_check11"><span>CL</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check12" />
            <label htmlFor="filter_check12"><span>NonCL</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check13" />
            <label htmlFor="filter_check13"><span>합법</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check14" />
            <label htmlFor="filter_check14"><span>불법</span></label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="checkbox" id="filter_check21" />
            <label htmlFor="filter_check21"><span>1~5</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check22" />
            <label htmlFor="filter_check22"><span>6</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check23" />
            <label htmlFor="filter_check23"><span>7</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check24" />
            <label htmlFor="filter_check24"><span>8</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check25" />
            <label htmlFor="filter_check25"><span>9</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check26" />
            <label htmlFor="filter_check26"><span>10</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check27" />
            <label htmlFor="filter_check27"><span>11</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check28" />
            <label htmlFor="filter_check28"><span>12</span></label>
          </li>
        </ul>
        {itemKind === '01' ?
        <ul> 
          <li>
            <input type="checkbox" id="filter_check31" />
            <label htmlFor="filter_check31"><span>저격소총</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check32" />
            <label htmlFor="filter_check32"><span>돌격소총</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check33" />
            <label htmlFor="filter_check33"><span>기관총</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check34" />
            <label htmlFor="filter_check34"><span>중화기</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check35" />
            <label htmlFor="filter_check35"><span>지원화기</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check36" />
            <label htmlFor="filter_check36"><span>샷건</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check37" />
            <label htmlFor="filter_check37"><span>권총</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check38" />
            <label htmlFor="filter_check38"><span>특수화기</span></label>
          </li>
        </ul>
        : itemKind === '02' ?
        <ul>
          <li>
            <input type="checkbox" id="filter_check41" />
            <label htmlFor="filter_check41"><span>도검</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check42" />
            <label htmlFor="filter_check42"><span>둔기</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check43" />
            <label htmlFor="filter_check43"><span>도끼</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check44" />
            <label htmlFor="filter_check44"><span>장창</span></label>
          </li>
          <li>
            <input type="checkbox" id="filter_check45" />
            <label htmlFor="filter_check45"><span>미늘창</span></label>
          </li>
        </ul>
        : null
        }

      </div>
    </section>
  );
}

export default ItemFilterView;
import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';
import isEmptyObject from 'is-empty-object';

const SET_ITEMS_FILTER = 'items/SET_ITEMS_FILTER';
const GET_ITEM_LIST = 'items/GET_ITEM_LIST';

export const setItemsFilter = createAction(SET_ITEMS_FILTER);
export const getItemList = createAction(GET_ITEM_LIST, api.getItemList);

const initialState = Map({
  itemFilters: Map({
    itemKind: '01'
  }),
  itemList: Map({
    list01: List(), //원거리
    list02: List(), //근거리
    list03: List(), //방패 
    list04: List(), //방어구
    list05: List(), //악세
    list06: List() //코튬날개
  })
});

export default handleActions({
  [SET_ITEMS_FILTER]: (state, action) => {
    const {name, value, checked} = action.payload;
    return state.setIn(['itemFilters', 'itemKind'], value);
  },
  ...pender({
    type: GET_ITEM_LIST,
    onSuccess: (state, action) => {
      const id = state.getIn(['itemFilters', 'itemKind']);
      const {data: items} = action.payload;
      
      return state.setIn(['itemList','list'+id], fromJS(items));
    }
  })
}, initialState);
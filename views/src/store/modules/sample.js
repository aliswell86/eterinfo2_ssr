import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const SAMPLE = 'sample/SAMPLE';

export const sample = createAction(SAMPLE);

const initialState = Map({
  sample: null
});

export default handleActions({
  [SAMPLE]: (action, state) => {
    return state;
  }
}, initialState);
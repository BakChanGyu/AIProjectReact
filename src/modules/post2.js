import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';


const [
  READ_POST2,
  READ_POST2_SUCCESS,
  READ_POST2_FAILURE,
] = createRequestActionTypes('post2/READ_POST2');

const UNLOAD_POST2 = 'post2/UNLOAD_POST2'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const unloadPost2 = createAction(UNLOAD_POST2);

export const readPost2 = createAction(READ_POST2, toeicIdCode => toeicIdCode);

const readPost2Saga = createRequestSaga(READ_POST2, postsAPI.readPost2);
export function* post2Saga() {
  yield takeLatest(READ_POST2, readPost2Saga);
}

const initialState = {
  post: null,
  error: null,
};

const post2 = handleActions(
  {
    [READ_POST2_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST2_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST2]: () => initialState,
  },
  initialState,
);

export default post2;

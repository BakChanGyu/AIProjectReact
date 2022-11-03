import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes('post/READ_POST');

const [
  READ_POST2,
  READ_POST2_SUCCESS,
  READ_POST2_FAILURE,
] = createRequestActionTypes('post/READ_POST2');


const [
  READ_POST3,
  READ_POST3_SUCCESS,
  READ_POST3_FAILURE,
] = createRequestActionTypes('post/READ_POST3');



const [
  HELP_POST,
  HELP_POST_SUCCESS,
  HELP_POST_FAILURE,
] = createRequestActionTypes('post/HELP_POST');





const UNLOAD_POST = 'post/UNLOAD_POST'; // 포스트 페이지에서 벗어날 때 데이터 비우기



const UNLOAD_POST2 = 'post/UNLOAD_POST2'; // 포스트 페이지에서 벗어날 때 데이터 비우기

const UNLOAD_POST3 = 'post/UNLOAD_POST3'; // 포스트 페이지에서 벗어날 때 데이터 비우기


export const readPost = createAction(READ_POST, missingIdCode => missingIdCode);

export const readPost2 = createAction(READ_POST2, toeicIdCode => toeicIdCode);

export const unloadPost = createAction(UNLOAD_POST);

export const unloadPost2 = createAction(UNLOAD_POST2);

export const readPost3 = createAction(READ_POST3, csatIdCode => csatIdCode);

export const unloadPost3 = createAction(UNLOAD_POST3);

export const helpPost = createAction(HELP_POST);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);

const readPost2Saga = createRequestSaga(READ_POST2, postsAPI.readPost2);

const readPost3Saga = createRequestSaga(READ_POST3, postsAPI.readPost3);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(READ_POST2, readPost2Saga);
  yield takeLatest(READ_POST3, readPost3Saga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_POST2_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST2_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_POST3_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST3_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [HELP_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [HELP_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    
    [UNLOAD_POST]: () => initialState,
    [UNLOAD_POST2]: () => initialState,
    [UNLOAD_POST3]: () => initialState,
  },
  initialState,
);

export default post;

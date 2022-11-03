import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE2 = 'write2/INITIALIZE2'; // 모든 내용 초기화
const CHANGE_FIELD2 = 'write2/CHANGE_FIELD2'; // 특정 key 값 바꾸기
const [
  WRITE_POST2,
  WRITE_POST2_SUCCESS,
  WRITE_POST2_FAILURE,
] = createRequestActionTypes('write2/WRITE_POST2'); // 포스트 작성



const SET_ORIGINAL_POST2 = 'write2/SET_ORIGINAL_POST2';

const [
  UPDATE_POST2,
  UPDATE_POST2_SUCCESS,
  UPDATE_POST2_FAILURE,
] = createRequestActionTypes('write2/UPDATE_POST2'); // 포스트 수정


export const initialize2 = createAction(INITIALIZE2);
export const changeField2 = createAction(CHANGE_FIELD2, ({ key, value }) => ({
  key,
  value,
}));
export const writePost2 = createAction(WRITE_POST2, ({ title, body, tags, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate, toeicRgstDate }) => ({
  title,
  body,
  tags,
  toeicIdCode,
  toeicName,
  toeicSsn,
  toeicAddress,
  toeicExamDate,
  toeicExamLoc,
  toeicRgstDate,
  toeicUpdateDate
}));


export const setOriginalPost2 = createAction(SET_ORIGINAL_POST2, post2 => post2);

export const updatePost2 = createAction(
  UPDATE_POST2,
  ({ id, title, body, tags, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate, toeicRgstDate }) => ({
    id,
    title,
    body,
    tags,
    toeicIdCode,
    toeicName,
    toeicSsn,
    toeicAddress,
    toeicExamDate,
    toeicExamLoc,
    toeicRgstDate,
    toeicUpdateDate
  }),
);


// saga 생성

const writePost2Saga = createRequestSaga(WRITE_POST2, postsAPI.writePost2);
const updatePost2Saga = createRequestSaga(UPDATE_POST2, postsAPI.updatePost2);

export function* write2Saga() {

  yield takeLatest(WRITE_POST2, writePost2Saga);
  yield takeLatest(UPDATE_POST2, updatePost2Saga);
  
}

const initialState2 = {
  title: '',
  body: '',
  tags: [],
  post2: null,
  postError: null,
  originalPostId: null,
};

const write2 = handleActions(
  {
    [INITIALIZE2]: state => initialState2, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD2]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST2]: state => ({
      ...state,
      // post와 postError를 초기화
      post2: null,
      postError: null,
    }),
 
    //토익 등록 성공
    [WRITE_POST2_SUCCESS]: (state, { payload: post2 }) => ({
      ...state,
      post2,
    }),
    //토익 등록 실패
    [WRITE_POST2_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST2]: (state, { payload:post2 }) => ({
      ...state,
      missingName: post2.missingName,
      body: post2.body,
      tags: post2.tags,
      originalPost2Id: post2.missingIdCode,
    }),
    //토익 수정 성공
    [UPDATE_POST2_SUCCESS]: (state, { payload: post2 }) => ({
      ...state,
      post2,
    }),
    //토익 수정 실패
    [UPDATE_POST2_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
 
  
  },
  initialState2,
);

export default write2;

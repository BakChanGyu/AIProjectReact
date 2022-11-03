import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화

const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 실종자 작성
const [
  WRITE_POST2,
  WRITE_POST2_SUCCESS,
  WRITE_POST2_FAILURE,
] = createRequestActionTypes('write/WRITE_POST2'); // 토익 작성

const [
  WRITE_POST3,
  WRITE_POST3_SUCCESS,
  WRITE_POST3_FAILURE,
] = createRequestActionTypes('write/WRITE_POST3'); // 수능 작성


const [
  UPLOAD_POST,
  UPLOAD_POST_SUCCESS,
  UPLOAD_POST_FAILURE,
] = createRequestActionTypes('write/UPLOAD_POST'); // 업로드 작성

const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const SET_ORIGINAL_POST2 = 'write/SET_ORIGINAL_POST2';

const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST'); // 실종자 수정

const [
  UPDATE_POST2,
  UPDATE_POST2_SUCCESS,
  UPDATE_POST2_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST2'); // 토익 수정

const [
  UPDATE_POST3,
  UPDATE_POST3_SUCCESS,
  UPDATE_POST3_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST3'); // 수능 수정

const [
  HELP,
  HELP_SUCCESS,
  HELP_FAILURE,
] = createRequestActionTypes('write/HELP'); // 수능 수정




export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate }) => ({
  title,
  body,
  tags,
  missingIdCode,
  missingName,
  missingSsn,
  missingAddress,
  missingDate,
  protectorName,
  protectorTel,
  missingRgstDate,
  missingUpdateDate
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

export const writePost3 = createAction(WRITE_POST3, ({ title, body, tags, csatIdCode, csatName, csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate, csatRgstDate }) => ({
  title,
  body,
  tags,
  csatIdCode,
  csatName,
  csatSsn,
  csatAddress,
  csatExamDate,
  csatExamLoc,
  csatRgstDate,
  csatUpdateDate
}));

export const uploadPost = createAction(UPLOAD_POST, ({ idCode, imageFiles}) => ({
  idCode,
  imageFiles,
}));




export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

export const setOriginalPost2 = createAction(SET_ORIGINAL_POST2, post => post);



export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags,missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate }) => ({
    id,
    title,
    body,
    tags,
    missingIdCode,
    missingName,
    missingSsn,
    missingAddress,
    missingDate,
    protectorName,
    protectorTel,
    missingRgstDate,
    missingUpdateDate
  }),
);
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

export const updatePost3 = createAction(
  UPDATE_POST3,
  ({ id, title, body, tags, csatIdCode, csatName, csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate, csatRgstDate }) => ({
    id,
    title,
    body,
    tags,
    csatIdCode,
    csatName,
    csatSsn,
    csatAddress,
    csatExamDate,
    csatExamLoc,
    csatRgstDate,
    csatUpdateDate
  }),
);

export const help = createAction(
  HELP,
  ({ id, title, body, tags, loginId }) => ({
    id,
    title,
    body,
    tags,
    loginId
  }),
);

// saga 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
const writePost2Saga = createRequestSaga(WRITE_POST2, postsAPI.writePost2);
const updatePost2Saga = createRequestSaga(UPDATE_POST2, postsAPI.updatePost2);
const writePost3Saga = createRequestSaga(WRITE_POST3, postsAPI.writePost3);
const updatePost3Saga = createRequestSaga(UPDATE_POST3, postsAPI.updatePost3);
const uploadPostSaga = createRequestSaga(UPLOAD_POST, postsAPI.uploadPost);
const helpPostSaga = createRequestSaga(HELP, postsAPI.help);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
  yield takeLatest(WRITE_POST2, writePost2Saga);
  yield takeLatest(UPDATE_POST2, updatePost2Saga);
  yield takeLatest(WRITE_POST3, writePost3Saga);
  yield takeLatest(UPDATE_POST3, updatePost3Saga);
  
  yield takeLatest(UPLOAD_POST, uploadPostSaga);
  yield takeLatest(HELP, helpPostSaga);
  
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    //토익 등록 성공
    [WRITE_POST2_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //토익 등록 실패
    [WRITE_POST2_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
      //수능 등록 성공
      [WRITE_POST3_SUCCESS]: (state, { payload: post }) => ({
        ...state,
        post,
      }),
      //수능 등록 실패
      [WRITE_POST3_FAILURE]: (state, { payload: postError }) => ({
        ...state,
        postError,
      }),
  


    [SET_ORIGINAL_POST]: (state, { payload:post }) => ({
      ...state,
      missingName: post.missingName,
      body: post.body,
      tags: post.tags,
      originalPostId: post.missingIdCode,
    }),

    [SET_ORIGINAL_POST2]: (state, { payload:post }) => ({
      ...state,
      missingName: post.missingName,
      body: post.body,
      tags: post.tags,
      originalPostId: post.toeicIdCode,
    }),
    
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    //토익 수정 성공
    [UPDATE_POST2_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //토익 수정 실패
    [UPDATE_POST2_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
      //수능 수정 성공
      [UPDATE_POST3_SUCCESS]: (state, { payload: post }) => ({
        ...state,
        post,
      }),
      //수능 수정 실패
      [UPDATE_POST3_FAILURE]: (state, { payload: postError }) => ({
        ...state,
        postError,
      }),

    [UPLOAD_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPLOAD_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [HELP_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [HELP_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;

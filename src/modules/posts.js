import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [   
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');

const [   
  LIST_POSTS2,
  LIST_POSTS2_SUCCESS,
  LIST_POSTS2_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS2');


const [   
  LIST_POSTS3,
  LIST_POSTS3_SUCCESS,
  LIST_POSTS3_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS3');

const [   
  LIST_POSTS4,
  LIST_POSTS4_SUCCESS,
  LIST_POSTS4_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS4');


const [   
  RESULT_POSTS,
  RESULT_POSTS_SUCCESS,
  RESULT_POSTS_FAILURE,
] = createRequestActionTypes('posts/RESULT_POSTS');






export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, page, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate,missingUpdateDate, missingUploaded  }) => ({ tag, username, page, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate, missingUploaded}),
);

export const listPosts2 = createAction(
  LIST_POSTS2,
  ({ tag, username, page, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate  }) => ({ tag, username, page, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate }),
);

export const listPosts3 = createAction(
  LIST_POSTS3,
  ({ tag, username, page, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate  }) => ({ tag, username, page, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate }),
);



export const resultPosts = createAction(
  RESULT_POSTS,
  ({ firstName, firstProbability, matchable, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate,missingUpdateDate   }) => ({ firstName, firstProbability, matchable, missingIdCode, missingName, missingSsn, missingAddress, missingDate, protectorName, protectorTel, missingRgstDate, missingUpdateDate }),
);

export const listPosts4 = createAction(
  LIST_POSTS4,
  ({ tag, username, page, memberName, email }) => ({ tag, username, page, memberName, email}),
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

const listPosts2Saga = createRequestSaga(LIST_POSTS2, postsAPI.listPosts2);

const listPosts3Saga = createRequestSaga(LIST_POSTS3, postsAPI.listPosts3);

const resultPostsSaga = createRequestSaga(RESULT_POSTS, postsAPI.resultPosts);

const listPosts4Saga = createRequestSaga(LIST_POSTS4, postsAPI.listPosts4);


export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(LIST_POSTS2, listPosts2Saga);
  yield takeLatest(LIST_POSTS3, listPosts3Saga);
  yield takeLatest(RESULT_POSTS, resultPostsSaga);
  yield takeLatest(LIST_POSTS4, listPosts4Saga);

}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_POSTS2_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS2_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_POSTS3_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS3_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [RESULT_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [RESULT_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_POSTS4_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS4_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;

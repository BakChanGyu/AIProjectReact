import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [   
  LIST_POSTS2,
  LIST_POSTS2_SUCCESS,
  LIST_POSTS2_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS2');

export const listPosts2 = createAction(
  LIST_POSTS2,
  ({ tag, username, page, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate  }) => ({ tag, username, page, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate }),
);


const listPosts2Saga = createRequestSaga(LIST_POSTS2, postsAPI.listPosts2);
export function* posts2Saga() {
  yield takeLatest(LIST_POSTS2, listPosts2Saga);
}

const initialState = {
  posts2: null,
  error: null,
  lastPage: 1,
};

const posts2 = handleActions(
  {
    [LIST_POSTS2_SUCCESS]: (state, { payload: posts2, meta: response }) => ({
      ...state,
      posts2,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS2_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts2;

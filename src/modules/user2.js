import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER2 = 'user2/TEMP_SET_USER2'; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user2/CHECK2',
);
const LOGOUT = 'user2/LOGOUT';

export const tempSetUser2 = createAction(TEMP_SET_USER2, user2 => user2);
export const check2 = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user2'); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user2'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function* user2Saga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user2: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER2]: (state, { payload: user2 }) => ({
      ...state,
      user2,
    }),
    [CHECK_SUCCESS]: (state, { payload: user2 }) => ({
      ...state,
      user2,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user2: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user2: null,
    }),
  },
  initialState,
);

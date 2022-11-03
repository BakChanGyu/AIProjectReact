import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);

const [LOGIN2, LOGIN2_SUCCESS, LOGIN2_FAILURE] = createRequestActionTypes(
  'auth/LOGIN2'
);

const [HELP, HELP_SUCCESS, HELP_FAILURE] = createRequestActionTypes(
  'auth/HELP'
);

const [MANAGER_LOGIN, MANAGER_LOGIN_SUCCESS, MANAGER_LOGIN_FAILURE] =createRequestActionTypes(
  'auth/MANAGER_LOGIN',
)

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const register = createAction(REGISTER, ({ loginId, password, memberName, memberId,memberType, email, privateKey }) => ({
  loginId, 
  password,
  memberName,
  memberId,
  memberType,
  email,
  privateKey
}));
export const login = createAction(LOGIN, ({ loginId, password }) => ({
  loginId,
  password
}));

export const login2 = createAction(LOGIN2, ({ loginId, password }) => ({
  loginId,
  password
}));

export const help = createAction(HELP, ({ loginId }) => ({
  loginId,

}));

export const managerLogin = createAction(MANAGER_LOGIN, ({ managerId, managerPwd, managerName}) => ({
  managerId,
  managerPwd,
  managerName,
}));




// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const login2Saga = createRequestSaga(LOGIN2, authAPI.login2);
const helpSaga = createRequestSaga(HELP, authAPI.help);
const managerSaga = createRequestSaga(MANAGER_LOGIN, authAPI.managerLogin);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGIN2, login2Saga);
  yield takeLatest(HELP, helpSaga);
  yield takeLatest(MANAGER_LOGIN, managerSaga)
}

const initialState = {
  register: {
    loginId: '',
    password: '',
    passwordConfirm: '',
    memberId: '',
    memberName: '',
    memberType:'',
    email: '',
    privateKey: '',
  },
  login: {
    loginId: '',
    password: '',
  },
  help: {
    loginId:'',
  },
  managerLogin:{
    managerId: '',
    managerPwd: '',
    managerName: '',
  },
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    [LOGIN2_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [LOGIN2_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    [HELP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [HELP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    [MANAGER_LOGIN_SUCCESS]: (state, {payload: auth}) =>({
      ...state,
      authError: null,
      auth,
    }),
    [MANAGER_LOGIN_FAILURE] :(state, {payload: error})=>({
      ...state,
      authError: error,
    }),

  },
  initialState
);

export default auth;

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import user2, {user2Saga }from './user2';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import write2, {write2Saga} from './write2';
import post2, {post2Saga} from './post2';
import posts2, {posts2Saga} from './posts2';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  user2,
  write,
  post,
  posts,
  write2,
  post2,
  posts2,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), user2Saga(), writeSaga(), postSaga(), postsSaga()], write2Saga(),post2Saga(), posts2Saga);
}

export default rootReducer;

import client from './client';


//매니저 로그인
export const managerLogin = ({managerId, managerPwd, managerName}) =>
  client.post('/api/manager/login', {managerId, managerPwd, managerName})

// 로그인
export const login = ({ loginId, password }) =>
  client.post('/api/police/login', { loginId, password });

export const login2 = ({ loginId, password }) =>
  client.post('/api/teacher/login', { loginId, password });


// 회원가입
export const register = ({ loginId, password, memberName, memberId, memberType,email }) =>
  client.post('/api/member/add', { loginId, password ,memberName, memberId, memberType, email });

// 로그인 상태 확인
export const check = () => client.get('/api/login');

// 로그아웃
export const logout = () => client.get('/api/logout');

// 비번 찾기
export const help = ({ loginId }) =>
  client.get('/api/login/find/password', { loginId });



  /*
  axios.post(url) {

}.then(response) {
  if(response.data.error_code) {
    alert(response.data.error_code);
  }
}
*/
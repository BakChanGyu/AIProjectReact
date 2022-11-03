import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm, login2 } from '../../modules/auth';
import AuthForm2 from '../../components/auth/Auth2Form';
 import { check2 } from '../../modules/user2';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user2 } = useSelector(({ auth, user2 }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user2: user2.user2,
  
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { loginId, password } = form;
    dispatch(login2({ loginId, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check2());
    }
  
  }, [  auth, authError, dispatch]);

  useEffect(() => {
    if (user2) {
      navigate('/teacher');
      try {
        localStorage.setItem('user2', JSON.stringify(user2));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user2]);

  return (
    <AuthForm2
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;

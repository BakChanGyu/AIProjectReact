import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm, managerLogin } from '../../modules/auth';
import ManagerForm from '../../components/auth/ManagerForm';
 import { check } from '../../modules/user';

const ManagerLoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, memberType, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.managerLogin,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'managerLogin',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { managerId, managerPwd } = form;
    dispatch(managerLogin({ managerId, managerPwd }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('managerLogin'));
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
      dispatch(check());
    }
  
  }, [  auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/member');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <ManagerForm
      
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default ManagerLoginForm;

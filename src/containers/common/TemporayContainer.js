import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Temporay from '../../components/common/Temporay';
import { logout } from '../../modules/user';

const TemporaryContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  const onRefresh =()=>{
    window.location.reload()
    dispatch(logout());
  }
  return <Temporay  onLogout={onLogout} onRefresh={onRefresh} />;
};

export default TemporaryContainer;

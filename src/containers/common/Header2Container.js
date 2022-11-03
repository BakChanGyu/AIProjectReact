import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header2 from '../../components/common/Header2';
import { logout } from '../../modules/user2';

const Header2Container = () => {
  const { user2 } = useSelector(({ user2 }) => ({ user2: user2.user2 }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header2 user2={user2} onLogout={onLogout} />;
};

export default Header2Container;

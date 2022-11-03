import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Member from '../../components/common/Member';
import { logout } from '../../modules/user';

const MemberContainer = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Member onLogout={onLogout} />;
};

export default MemberContainer;

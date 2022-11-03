import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PoliceHeader from '../../components/common/PoliceHeader';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
 
  return <PoliceHeader  />;
};

export default HeaderContainer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TeacherHeader from '../../components/common/TeacherHeader';
import { logout } from '../../modules/user';

const TeacherHeaderContainer = () => {
 
  return <TeacherHeader  />;
};

export default TeacherHeaderContainer;

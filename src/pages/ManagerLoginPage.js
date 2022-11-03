import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ManagerLoginForm from '../containers/auth/ManagerLoginForm';

const ManagerLoginPage = () => {
  return (
    <AuthTemplate>
      <ManagerLoginForm />
    </AuthTemplate>
  );
};

export default ManagerLoginPage;

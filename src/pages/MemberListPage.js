import React from 'react';
import MemberContainer from '../containers/common/MemberContainer';
import MemberListContainer from '../containers/posts/MemberListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const MemberListPage = () => {
  return (
    <>
     <MemberContainer />
      <MemberListContainer />
      
    </>
  );
};

export default MemberListPage;

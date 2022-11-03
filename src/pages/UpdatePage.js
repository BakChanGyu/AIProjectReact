import React from 'react';
import Responsive from '../components/common/Responsive';
import UpdateContainer from '../containers/write/UpdateContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import UpdateButton from '../containers/write/UpdateButton';


const UpdatePage = () => {
  return (
    <Responsive>
    

      <UpdateContainer />
   
      <UpdateButton />
    </Responsive>
  );
};

export default UpdatePage;

import React from 'react';
import Responsive from '../components/common/Responsive';
import UploadContainer from '../containers/write/UploadContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import UploadActionButtonsContainer from '../containers/write/UploadActionButtonsContainer';


const WritePage = () => {
  return (
    <Responsive>
    

      <UploadContainer />
   
      <UploadActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;

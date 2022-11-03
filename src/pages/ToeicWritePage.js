import React from 'react';
import Responsive from '../components/common/Responsive';
import ToeicEditorContainer from '../containers/write/ToeicEditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import ToeicActionButtonsContainer from '../containers/write/ToeicActionButtonsContainer';


const WritePage = () => {
  return (
    <Responsive>
    

      <ToeicEditorContainer />
   
      <ToeicActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;

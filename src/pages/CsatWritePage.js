import React from 'react';
import Responsive from '../components/common/Responsive';
import CsatEditorContainer from '../containers/write/CsatEditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import CsatActionButtonsContainer from '../containers/write/CsatActionButtonsContainer';


const CsatWritePage = () => {
  return (
    <Responsive>
    

      <CsatEditorContainer />
   
      <CsatActionButtonsContainer />
    </Responsive>
  );
};

export default CsatWritePage;

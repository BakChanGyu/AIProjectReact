import React from 'react';
import Responsive from '../components/common/Responsive';
import CsatUpdateContainer from '../containers/write/CsatUpdateContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import CsatUpdateButton from '../containers/write/CsatUpdateButton';


const CsatUpdatePage = () => {
  return (
    <Responsive>
    

      <CsatUpdateContainer />
   
      <CsatUpdateButton />
    </Responsive>
  );
};

export default CsatUpdatePage;

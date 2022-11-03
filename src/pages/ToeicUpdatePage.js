import React from 'react';
import Responsive from '../components/common/Responsive';
import ToeicUpdateContainer from '../containers/write/ToeicUpdateContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import ToeicUpdateButton from '../containers/write/ToeicUpdateButton';


const ToeicUpdatePage = () => {
  return (
    <Responsive>
    

      <ToeicUpdateContainer />
   
      <ToeicUpdateButton />
    </Responsive>
  );
};

export default ToeicUpdatePage;

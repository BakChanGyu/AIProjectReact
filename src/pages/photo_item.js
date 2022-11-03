import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const PhotoItem = (props) => {
    const [data, setData] = useState('');
    
   
    return (
      <>
      
  
        <div>
         
          <h5>{`officer_id:${props.photo.missingName}`}</h5>
          
      </div>
  
      
      </>
        
    );
};

export default PhotoItem;
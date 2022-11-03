import React from 'react';
import PhotoItem from './photo_item';


const PhotoList = (props) => {
   
    return (
        <div>
          
            {props.photos.map(photo => (
                <PhotoItem key={photo.name}  photo={photo} />
            ))}
            
        </div>
    );
};

export default PhotoList;
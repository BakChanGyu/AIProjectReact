import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
   
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SubInfo3 = ({  username, publishedDate, hasMarginTop, missingName, missingIdCode, idCode, name, toeicRgstDate, missingSsn, missingAddress, toeicName, toeicExamLoc, toeicIdCode }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        
      
        
          
           응시 장소: {toeicExamLoc} 
           <br />
           등록 일자:  {toeicRgstDate}
          
        
     </span>
  
    </SubInfoBlock>
  );
};

export default SubInfo3;
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

const SubInfo2 = ({ value, username, publishedDate, hasMarginTop, missingName, missingDate, protectorName, missingIdCode, idCode, name, missingRgstDate, missingSsn, missingAddress, toeicLoc , protectorTel}) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
      
        
          
           이름: {missingName} 
          <br></br>
           주민등록번호: {missingSsn} 
          <br></br>
           주소: {missingAddress}
          <br></br>
          실종 날짜: {missingDate}
          <br></br>
          보호자 이름: {protectorName}
          <br></br>
          보호자 연락처: {protectorTel}
          
        </b>
     </span>
  
    </SubInfoBlock>
  );
};

export default SubInfo2;
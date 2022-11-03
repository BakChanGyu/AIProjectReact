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

const SubInfo4 = ({  username, publishedDate, hasMarginTop, csatExamDate, csatSsn, csatAddress, missingName, missingIdCode, idCode, name, missingRgstDate, missingSsn, missingAddress, csatName, csatExamLoc }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
      
          
          
         응시자 이름: {csatName} 
          <br></br>
          응시 장소 :{csatExamLoc}
          <br></br>
          응시 날짜 : {csatExamDate}
          <br></br>
          응시자 주민등록번호: {csatSsn}
          <br></br>
          응시자 주소: {csatAddress}
          
        </b>
     </span>
  
    </SubInfoBlock>
  );
};

export default SubInfo4;
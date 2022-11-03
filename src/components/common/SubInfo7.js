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

const SubInfo7 = ({  username, publishedDate,email, memberType, hasMarginTop, csatExamDate, csatSsn, csatAddress, memberName, missingIdCode, idCode, name, missingRgstDate, missingSsn, missingAddress, csatName, csatExamLoc }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
      
          
          
         회원 이름: {memberName} 
          <br></br>
          이메일 :{email}
          <br></br>
        회원 종류: {memberType}
        
          
        </b>
     </span>
  
    </SubInfoBlock>
  );
};

export default SubInfo7;
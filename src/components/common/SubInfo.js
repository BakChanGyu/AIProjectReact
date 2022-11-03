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
  color: ${palette.gray[10]};

  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[8]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SubInfo = ({ value, username, publishedDate, hasMarginTop ,toeicName,missingIdCode, missingName, missingSsn, missingAddress, missingRgstDate, missingDate, missingIsUploaded, protectorName, protectorTel, missingUpdateDate}) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      
      <span> 실종자 날짜:{missingDate}</span>
      <br />
             등록 일자:{missingRgstDate}

      <br />
              

    </SubInfoBlock>
  );
};

export default SubInfo;

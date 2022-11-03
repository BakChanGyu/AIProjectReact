
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo6 from '../common/SubInfo6';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const CsatViewer = ({  user2, post, error, loading, actionButtons, ownPost, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
  }
  if(user2===null){
    return <PostViewerBlock>접근 권한이 없습니다.</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {

    return <PostViewerBlock>데이터가 없음 </PostViewerBlock>;
  }

  if(post.value.csatIsUploaded===1){
    alert("학습할 필적을 업로드한 대상입니다. ");
  }else{
    alert("학습할 필적을 업로드 하지 않은 대상입니다. ");
  }
  

  const { value, title, body, user, publishedDate, tags, missingIdCode, missingName, missingSsn, missingAddress, missingRgstDate, missingDate, protectorName, protectorTel, missingUpdateDate, csatName  } = post;
  return (
    <PostViewerBlock>
      
        <title>{csatName} - REACTERS</title>
      
        <Link to="/csat" style={{ color: "black" , textDecoration: "none" }}>
        <Button>조회</Button>
        </Link>

      <PostHead>
        <h1>{value.csatName}</h1>
    <SubInfo6
      csatName={post.value.csatName}
      csatSsn={post.value.csatSsn}
      csatExamDate={post.value.csatExamDate}
      csatExamLoc={post.value.csatExamLoc}
      csatAddress={post.value.csatAddress}
      />
      </PostHead>
     
        
        {actionButtons}
        
   
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default CsatViewer;

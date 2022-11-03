import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo2 from '../common/SubInfo2';
import Tags from '../common/Tags';
import Button from '../common/Button';
import {Link} from "react-router-dom";



const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[6]};
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

const PostViewer = ({ post, error, loading, actionButtons, ownPost, missingIsUploaded }) => {

  const [upload, setUpload] = useState("");


 
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }


  if(post.value.missingIsUploaded===1){
    alert("학습할 필적을 업로드한 대상입니다. ");
  }else{
    alert("학습할 필적을 업로드 하지 않은 대상입니다. ");
  }
  

  const { value, title, body, user, publishedDate, tags, missingIdCode, missingName, toeicName, missingSsn, missingAddress, missingRgstDate, missingDate, protectorName, protectorTel, missingUpdateDate  } = post;
  return (

    
    <PostViewerBlock>
      
        <title> REACTERS</title>
        <Link to="/missing" style={{ color: "black" , textDecoration: "none" }}>
        <Button>조회</Button>
      </Link>

      <PostHead>
        
        <h1>{post.value.missingName}</h1>
        <SubInfo2
          missingName={post.value.missingName}
          missingDate={post.value.missingDate}
          protectorName={post.value.protectorName}
          missingSsn={post.value.missingSsn}
          missingAddress={post.value.missingAddress}
          protectorTel={post.value.protectorTel}

        />

        <Tags
          missingIdCode={post.value.missingIdCode}
  
          />

      
        
      </PostHead>
      
      {actionButtons}
      
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;

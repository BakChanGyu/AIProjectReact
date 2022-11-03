import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import PostActionButtons from '../post/PostActionButtons';


const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const UploadPostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, firstName, firstProbability, matchable, body, _id, missingIdCode, missingName, missingSsn, missingAddress, missingRgstDate, missingDate, protectorName, protectorTel, missingUpdateDate } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/missing/${missingIdCode}`}>{missingName}</Link>
      </h2>
      <h3>{firstName}</h3>
      <h3>{firstProbability}</h3>
      <h3>{matchable}</h3>
      <SubInfo
        missingIdCode={post.missingIdCode}
        missingName={post.missingName}
        protectorName={post.protectorName}
        missingSsn={post.missingSsn}
      />
      <Tags 
        missingIdCode={post.missingIdCode}
        />
  
    </PostItemBlock>
  );
};

const  ResultList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>

    
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )
        }
      </WritePostButtonWrapper>
      
      <UploadPostButtonWrapper>
        <Link to="/result">
          <Button>  비교할 필적 업로드</Button> 
        </Link>
      </UploadPostButtonWrapper>
        
        
     
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.missingIdCode} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default ResultList;

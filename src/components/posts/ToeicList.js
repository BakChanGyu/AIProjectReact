import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo3 from '../common/SubInfo3';
import Tags2 from '../common/Tags2';
import { Link } from 'react-router-dom';

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
  const { publishedDate, user, tags, title, body, _id, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/toeic/${toeicIdCode}`} style={{ color: "black" , textDecoration: "none" }}>{toeicName}</Link>
      </h2>
      <SubInfo3
        toeicIdCode={post.toeicIdCode}
        toeicName={post.toeicName}
        toeicExamLoc={post.toeicExamLoc}
        toeicRgstDate={post.toeicRgstDate}
      />
      <Tags2
        toeicIdCode={post.toeicIdCode}
        />
  
    </PostItemBlock>
  );
};

const ToeicList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/toeic_write">
            토익 응시자 등록하기
          </Button>
        )}
      </WritePostButtonWrapper>

    
        
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.toeicIdCode} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default ToeicList;

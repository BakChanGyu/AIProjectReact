import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToeicList from '../../components/posts/ToeicList';
import { listPosts2 } from '../../modules/posts';
import { useParams, useSearchParams } from 'react-router-dom';

const ToeicListContainer = () => {
  const { toeicIdCode } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user2 } = useSelector(
    ({ posts, loading, user2 }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS2'],
      user2: user2.user2,
    }),
  );
  useEffect(() => {
    const tag = searchParams.get('tag');
    // page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;
    dispatch(listPosts2({ tag, toeicIdCode, page }));
  }, [dispatch, searchParams, toeicIdCode]);

  return (
    <ToeicList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user2}
    />
  );
};

export default ToeicListContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CsatList from '../../components/posts/CsatList';
import { listPosts3 } from '../../modules/posts';
import { useParams, useSearchParams } from 'react-router-dom';

const CsatListContainer = () => {
  const { CsatIdCode } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user2 } = useSelector(
    ({ posts, loading, user2 }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS3'],
      user2: user2.user2,
    }),
  );
  useEffect(() => {
    const tag = searchParams.get('tag');
    // page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;
    dispatch(listPosts3({ tag, CsatIdCode, page }));
  }, [dispatch, searchParams, CsatIdCode]);

  return (
    <CsatList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user2}
    />
  );
};

export default CsatListContainer;

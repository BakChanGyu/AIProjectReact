import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberList from '../../components/posts/MemberList';
import { listPosts4 } from '../../modules/posts';
import { useParams, useSearchParams } from 'react-router-dom';

const MemberListContainer = () => {
  const { CsatIdCode } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS4'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const tag = searchParams.get('tag');
    // page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;
    dispatch(listPosts4({ tag, CsatIdCode, page }));
  }, [dispatch, searchParams, CsatIdCode]);

  return (
    <MemberList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default MemberListContainer;

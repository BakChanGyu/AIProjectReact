import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import Result from '../../pages/ResultPage';

const PostViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { missingIdCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(missingIdCode));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, missingIdCode]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/update');
  };

  const onRemove = async () => {
    try {
      await removePost(missingIdCode);
      navigate('/missing'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={ 
         <PostActionButtons  onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost2, unloadPost2} from '../../modules/post';
import ToeicViewer from '../../components/post/ToeicViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost2 } from '../../modules/write';
import { removePost2 } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import user from '../../modules/user';

const  ToeicViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { toeicIdCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user2 } = useSelector(
    ({ post, loading, user2}) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST2'],
      user2: user2.user2,
      
      
    }),
  );

  useEffect(() => {
    dispatch(readPost2(toeicIdCode));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost2());
    };
  }, [dispatch, toeicIdCode]);

  const onEdit = () => {
    dispatch(setOriginalPost2(post));
    navigate('/toeic_update');
  };

  const onRemove = async () => {
    try {
      await removePost2(toeicIdCode);
      navigate('/toeic'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  

  return (
    <ToeicViewer
      post={post}
      loading={loading}
      error={error}
      user2={user2}
      actionButtons={
         <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default ToeicViewerContainer;

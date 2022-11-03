import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost3, unloadPost3} from '../../modules/post';
import CsatViewer from '../../components/post/CsatViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost2 } from '../../modules/write';
import { removePost3 } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';

const  CsatViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { csatIdCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user2 } = useSelector(
    ({ post, loading, user2 }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST3'],
      user2: user2.user2,
    }),
  );

  useEffect(() => {
    dispatch(readPost3(csatIdCode));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost3());
    };
  }, [dispatch, csatIdCode]);

  const onEdit = () => {
    dispatch(setOriginalPost2(post));
    navigate('/csat_update');
  };

  const onRemove = async () => {
    try {
      await removePost3(csatIdCode);
      navigate('/csat'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  

  return (
    <CsatViewer
      post={post}
      loading={loading}
      error={error}
      user2={user2}
      actionButtons={
         <PostActionButtons  onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default CsatViewerContainer;

import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPost, updatePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';

const UploadActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, idCode, imageFiles } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.missingIdCode,
      idCode: write.idCode,
      imageFiles: write.imageFiles,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      uploadPost({
        title,
        body,
        tags,
        idCode,
        imageFiles,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      navigate(`/result`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default UploadActionButtonsContainer;

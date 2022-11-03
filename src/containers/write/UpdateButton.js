import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost, updatePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const UpdateButton = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, missingIdCode, missingName, missingSsn, missingAddress, missingRgstDate, missingDate, protectorName, protectorTel, missingUpdateDate } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.missingIdCode,
      missingIdCode: write.missingIdCode,
      missingName: write.missingName,
      missingSsn: write.missingSsn,
      missingAddress: write.missingAddress,
      missingRgstDate: write.missingRgstDate, 
      missingDate: write.missingDate,
      protectorName: write.protectorName,
      protectorTel: write.protectorTel,
      missingUpdateDate: write.missingUpdateDate,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
   
    dispatch(
      updatePost({
        title,
        body,
        tags,
        missingIdCode,
        missingName,
        missingSsn,
        missingAddress,
        missingRgstDate,
        missingDate,
        protectorName,
        protectorTel,
        missingUpdateDate,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (body) {
      const { missingIdCode } = post;
      navigate(`/missing`);
    }
    if (error) {
      alert("값을 모두 입력하세요");
      console.log(error);
    }
  }, [navigate, post, error]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!missingIdCode}
    />
  );
};

export default UpdateButton;

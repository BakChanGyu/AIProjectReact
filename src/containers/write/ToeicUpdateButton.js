
import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost2, updatePost2 } from '../../modules/write';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const UpdateButton = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicRgstDate, toeicExamDate, toeicExamLoc, toeicUpdateDate, } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.missingIdCode,
      toeicIdCode: write.toeicIdCode,
      toeicName: write.toeicName, 
      toeicSsn: write.toeicSsn,
      toeicAddress: write.toeicAddress,
      toeicExamDate: write.toeicExamDate,
      toeicExamLoc: write.toeicExamLoc,
      toeicUpdateDate: write.toeicUpdateDate,
      toeicRgstDate: write.toeicRgstDate,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      updatePost2({
        title,
        body,
        tags,
        toeicIdCode,
        toeicName,
        toeicSsn,
        toeicAddress,
        toeicRgstDate,
        toeicExamDate,
        toeicExamLoc,
        toeicUpdateDate,
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
      const { toeicIdCode } = post;
      navigate(`/toeic/`);
    }
    if (error) {
      console.log(error);
    }
  }, [navigate, post, error]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!toeicIdCode}
    />
  );
};

export default UpdateButton;

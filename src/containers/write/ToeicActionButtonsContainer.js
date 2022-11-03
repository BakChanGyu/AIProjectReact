import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost2, updatePost2 } from '../../modules/write';
import { useNavigate } from 'react-router-dom';

const ToeicActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.toeicIdCode,
      toeicIdCode: write.toeicIdCode,
      toeicName: write.toeicName,
      toeicSsn: write.toeicSsn,
      toeicAddress: write.toeicAddress,
      toeicRgstDate: write.toeicRgstDate,
      toeicExamDate: write.toeicExamDate,
      toeicExamLoc: write.toeicExamLoc,
      toeicUpdateDate: write.toeicUpdateDate,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (toeicIdCode) {
      dispatch(updatePost2({ toeicIdCode, toeicName, toeicSsn, toeicAddress, toeicRgstDate, toeicExamDate, toeicExamLoc, toeicUpdateDate, title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      writePost2({
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
    if (post) {
      const { toeicIdCode } = post;
      navigate(`/toeic/${toeicIdCode}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!toeicIdCode}
    />
  );
};

export default ToeicActionButtonsContainer;

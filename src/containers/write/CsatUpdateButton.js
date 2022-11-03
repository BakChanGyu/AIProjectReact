
import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost3, updatePost3 } from '../../modules/write';
import { useNavigate } from 'react-router-dom';

const CsatUpdateButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, csatIdCode, csatName, csatSsn, csatAddress, csatRgstDate, csatExamDate, csatExamLoc, csatUpdateDate, } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.csatIdCode,
      csatIdCode: write.csatIdCode,
      csatName: write.csatName, 
      csatSsn: write.csatSsn,
      csatAddress: write.csatAddress,
      csatExamDate: write.csatExamDate,
      csatExamLoc: write.csatExamLoc,
      csatUpdateDate: write.csatUpdateDate,
      csatRgstDate: write.csatRgstDate,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      updatePost3({
        title,
        body,
        tags,
        csatIdCode,
        csatName,
        csatSsn,
        csatAddress,
        csatRgstDate,
        csatExamDate,
        csatExamLoc,
        csatUpdateDate,
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
      const { csatIdCode } = post;
      navigate(`/csat`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!csatIdCode}
    />
  );
};

export default CsatUpdateButton;

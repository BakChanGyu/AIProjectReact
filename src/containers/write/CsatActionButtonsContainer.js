import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost3, updatePost3 } from '../../modules/write';
import { useNavigate } from 'react-router-dom';


const CsatActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate } = useSelector(
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
      csatRgstDate: write.csatRgstDate,
      csatExamDate: write.csatExamDate,
      csatExamLoc: write.csatExamLoc,
      csatUpdateDate: write.csatUpdateDate,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (csatIdCode) {
      dispatch(updatePost3({ csatIdCode, csatName, csatSsn, csatAddress, csatRgstDate, csatExamDate, csatExamLoc, csatUpdateDate, title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      writePost3({
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
  
    if (post) {
      const { csatIdCode } = post;
      navigate(`/csat/${csatIdCode}`);
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

export default CsatActionButtonsContainer;

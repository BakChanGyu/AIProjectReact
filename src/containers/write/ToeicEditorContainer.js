import React, { useEffect, useCallback } from 'react';
import ToeicEditor from '../../components/write/ToeicEditor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const ToeicEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, toeicIdCode, toeicName, toeicRgstDate,  toeicSsn, toeicAddress, toeicExamDate, toeicExamLoc, toeicUpdateDate } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    toeicIdCode: write.toeicIdCode,
    toeicName: write.toeicName, 
    toeicSsn: write.toeicSsn,
    toeicAddress: write.toeicAddress,
    toeicExamDate: write.toeicExamDate,
    toeicExamLoc: write.toeicExamLoc,
    toeicUpdateDate: write.toeicUpdateDate,
    toeicRgstDate: write.toeicRgstDate,
    
  }));
  const onChangeField= useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <ToeicEditor onChangeField={onChangeField} title={title} body={body} toeicIdCode={toeicIdCode} toeicName={toeicName} toeicSsn={toeicSsn} toeicAddress={toeicAddress} toeicRgstDate={toeicRgstDate} toeicExamDate={toeicExamDate} toeicExamLoc={toeicExamLoc} toeicUpdateDate={toeicUpdateDate} />;
};

export default ToeicEditorContainer;

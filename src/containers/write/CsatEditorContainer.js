import React, { useEffect, useCallback } from 'react';
import CsatEditor from '../../components/write/CsatEditor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const CsatEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    csatIdCode: write.csatIdCode,
    csatName: write.csatName, 
    csatSsn: write.csatSsn,
    csatAddress: write.csatAddress,
    csatExamDate: write.csatExamDate,
    csatExamLoc: write.csatExamLoc,
    csatUpdateDate: write.csatUpdateDate,
    csatRgstDate: write.csatRgstDate,
    
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
  return <CsatEditor onChangeField={onChangeField} title={title} body={body} csatIdCode={csatIdCode} csatName={csatName} csatSsn={csatSsn} csatAddress={csatAddress} csatRgstDate={csatRgstDate} csatExamDate={csatExamDate} csatExamLoc={csatExamLoc} csatUpdateDate={csatUpdateDate} />;
};

export default CsatEditorContainer;

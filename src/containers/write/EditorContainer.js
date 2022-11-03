import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, missingIdCode, missingName, missingSsn, missingAddress, missingRgstDate, missingDate, protectorName, protectorTel, missingUpdateDate } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    missingIdCode: write.missingIdCode,
    missingName: write.missingName, 
    missingSsn: write.missingSsn,
    missingAddress: write.missingAddress,
    missingRgstDate: write.missingRgstDate,
    missingDate: write.missingDate,
    protectorName: write.protectorName,
    protectorTel: write.protectorTel,
    missingUpdateDate: write.missingUpdateDate,
    
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} missingIdCode={missingIdCode} missingName={missingName} missingSsn={missingSsn} missingAddress={missingAddress} missingRgstDate={missingRgstDate} missingDate={missingDate} protectorName={protectorName} protectorTel={protectorTel} missingUpdateDate={missingUpdateDate} />;
};

export default EditorContainer;

import React, { useEffect, useCallback } from 'react';
import Upload from '../../components/write/Upload';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const UploadContainer = () => {
  const dispatch = useDispatch();
  const {idCode, imageFiles} = useSelector(({ write }) => ({
    idCode: write.idCode,
    imageFiles: write.imageFiles,
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
  return <Upload onChangeField={onChangeField} idCode={idCode} imageFiles={imageFiles}/>;
};

export default UploadContainer;

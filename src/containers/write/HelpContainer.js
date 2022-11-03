import React, { useEffect, useCallback } from 'react';
import HelpEditor from '../../components/write/HelpEditor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, loginId} = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    loginId: write.loginId,
    
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
  return <HelpEditor onChangeField={onChangeField} title={title} body={body} loginId={loginId} />;
};

export default EditorContainer;

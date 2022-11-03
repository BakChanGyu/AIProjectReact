import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  /* 페이지 위 아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const CsatEditor = ({ title, body, onChangeField, csatIdCode, csatName, csatRgstDate,  csatSsn, csatAddress, csatExamDate, csatExamLoc, csatUpdateDate }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  const onChangeTitle1 = e => {
    onChangeField({ key: 'csatIdCode', value: e.target.value });
  };
  const onChangeTitle2 = e => {
    onChangeField({ key: 'csatName', value: e.target.value });
  };
  const onChangeTitle3 = e => {
    onChangeField({ key: 'csatSsn', value: e.target.value });
  };
  const onChangeTitle4 = e => {
    onChangeField({ key: 'csatAddress', value: e.target.value });
  };
  const onChangeTitle5 = e => {
    onChangeField({ key: 'csatExamDate', value: e.target.value });
  };
  const onChangeTitle6 = e => {
    onChangeField({ key: 'csatExamLoc', value: e.target.value });
  };
  const onChangeTitle7 = e => {
    onChangeField({ key: 'csatRgstDate', value: e.target.value });
  };
  const onChangeTitle8 = e => {
    onChangeField({ key: 'csatUpdateDate', value: e.target.value });
  };
  return (
    <EditorBlock>
 
      <TitleInput
        placeholder="수험생 이름"
        onChange={onChangeTitle2}
        value={csatName}
      />
      <TitleInput
        placeholder="주민등록번호"
        onChange={onChangeTitle3}
        value={csatSsn}
      />
      <TitleInput
        placeholder="주소"
        onChange={onChangeTitle4}
        value={csatAddress}
      />
      <TitleInput
        placeholder="수능 응시 일자  예)2022-01-01"
        onChange={onChangeTitle5}
        value={csatExamDate}
      />
      <TitleInput
        placeholder="수능 시험 장소 "
        onChange={onChangeTitle6}
        value={csatExamLoc}
      />
     
  
   
   
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default CsatEditor;

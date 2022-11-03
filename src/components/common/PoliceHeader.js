import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import {send} from '../../lib/api/posts';
import Loading2 from '../../pages/Loading2';
import axios from "axios";
import { useState } from 'react';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const PoliceHeader = ({ user, onLogout }) => {
  const [loading, setLoading] = useState(false);


  async function f2(){
    setLoading(true)
    const response = await axios.get('api/image/learn/start')

    
    
  
    .then(response=>{
      setLoading(false);
     alert(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(response.data);
  }


  return (
    <>
    <div>
    {loading ? <Loading2/> : null}

  
      <HeaderBlock>
        <Wrapper>
          <Link to="/missing" style={{ color: "black" , textDecoration: "none" }} className="logo">
            신원확인 대상자 조회
          </Link>
          <Link to="/result" style={{ color: "black" , textDecoration: "none" }} className="logo">
            비교할 필적
          </Link>
          <Link to="/result2" style={{ color: "black" , textDecoration: "none" }} className="logo">
            학습할 필적
          </Link>
           <Button onClick={f2}>학습하기</Button>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
      </div>
    </>
  );
};

export default PoliceHeader;

/*
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Login2Form from '../containers/auth/Login2Form';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Login2Form />
    </AuthTemplate>
  );
};

export default LoginPage;
*/

/*
import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import HelpForm from "../containers/auth/HelpForm";

const TestPage =()=>{
  return(
    <AuthTemplate>
      <HelpForm />
    </AuthTemplate>
  )
}
export default TestPage;
*/

import React from "react";
import Button from "../components/common/Button";
import { useCallback } from "react";
import { useRef } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import styled,{css} from "styled-components";
import palette from '../lib/styles/palette';
import Loading from './Loading';


const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.cyan[6]};
  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.cyan[7]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
   
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SettingUserThumbnail = () => {

  const [name, setName] = useState([]);
  const [probability, setProbability] =useState("");
  const [ssn, setSsn] = useState([]);
  const [address, setAddress] = useState([]);
  const [tel, setTel] = useState([]);
  const [proname, setProName] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }

   
    const formData = new FormData();
    
    for (let i = 0; i < e.target.files.length; i++) { 
      formData.append("imageFiles", e.target.files[i]);}
    
    axios({
      url: '/api/image/missing/upload',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: progressEvent => {
        console.log('upload progress:' + Math.round(progressEvent.loaded/ progressEvent.total* 100)+ '%')
        setLoading(true);
      }
    })
      .then(response => {
        setName(response.data.firstName)
        setProbability(response.data.firstProbability)
        setSsn(response.data.missingSsn)
        setAddress(response.data.missingAddress)
        setTel(response.data.protectorTel)
        setProName(response.data.protectorName)
        
        console.log(response.data);
        
        console.log(response.data.firstName);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        console.log(error);
        
      });
  }, []);
  
  
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  
  return (
  <>
    
    <Button>
    <input
      type="file"
      name="imageFiles"
      multiple="multiple"
      
      ref={inputRef}
      onChange={onUploadImage}
    />
    </Button>

    <div>
      {loading ? <Loading/> : null}
    
  
    <div>
    <h1>이름:{name}</h1>
    <hr></hr>
   <h1>일치 확률:{probability}%</h1>

    <SubInfoBlock>
      주민등록번호:{ssn}
      <br></br>
      주소:{address}
      <br></br>
      보호자 연락처:{tel}
      <br></br>
      보호자 성함:{proname}
      <br></br>
    </SubInfoBlock>
  </div>
  </div>
</>
);
}

export default SettingUserThumbnail;
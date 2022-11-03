/*
import React from "react";
import axios from 'axios';
import { useState } from "react";


const ResultPage =()=>  {

const [ idCode, setIdCode] = useState("");

function onChange (e) {
  setIdCode(e.target.value);
}
function onChange1 (e) {
  
}

const onSubmit = e =>{
  e.preventDefault();
  const formData = new FormData(); 
  formData.append("cb0ve5sj", idCode);

  axios
    .post("/api/image/missing/upload", formData,{
      headers:{
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log("fail");
    });
  };

return(
  <>
  <form onSubmit={onSubmit}>
  <div>
  <input name="imageFiles"
    type="file"
    onChange={onChange}/>
  <input 
    type="text"
    name="idCode"
    onChange={onChange1}/>
    <input type="submit" value="upload" />
  </div>
  </form>
  </>
)
}
export default ResultPage;
*/

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResultPage(e) {
  if (e.target.files[0]) {
    const img = new FormData();
    const idCode = 'bsh_cqz_xeh_';

    img.append('idCode', idCode);
    img.append('imageFiles', e.target.files[0]);
    axios
      .post('http://43.201.13.38/api/image/missing/upload', img, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('성공');
      })
      .catch((error_code) => {
        alert(error_code);
      });
  }
}

export default ResultPage;
*/
/*
import React from "react"
import axios from 'axios'


function ResultPage(){

  
  return(
    <>
      <form action="api/image/missing/upload" method="post" enctype="multipart/form-data">
    <ul>
      <li>idCode <input type="text" name="idCode"/></li>
      <li>첨부파일 <input type="file" name="attachFile"/></li>
      <li>이미지 파일들 <input type="file" multiple="multiple" name="imageFiles"/></li>
    </ul>
    <input type="submit" value={"등록"}/>

    


  </form>
    </>
)
  }
export default ResultPage;
*/

/*
import React from "react"
import axios from 'axios'


function Result2Page(){

  
  return(
    <>
      <form action="api/image/learn/upload" method="post" enctype="multipart/form-data">
    <ul>
      <li>idCode <input type="text" name="idCode"/></li>
      <li>첨부파일 <input type="file" multiple="multiple" name="imageFiles"/></li>
      <li>이미지 파일들 <input type="file" multiple="multiple" name="imageFiles"/></li>
    </ul>
    <input type="submit" value={"등록"}/>

    


  </form>
    </>
)
  }
export default Result2Page;

*/

/*
import React from "react";
import { useState } from "react";
import axios from "axios";


const Result2Page=()=> {



const [ content, setContent] = useState("");



  function onChange (e) {
  setContent(e.target.value);
}

function onChange2 (e) {
  setContent(e.target.files);
}





const onSubmit = e => {
  e.preventDefault();

  const formData = new FormData();



  formData.append("idCode", content);
  
  for (let i = 0; i < e.target.files.length; i++) { 
    formData.append("imageFiles", e.target.files[i]);}
  

  axios
    .post("/api/image/learn/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error.response);
      alert(error.response.data);
    });
};

return(
  <form onSubmit={onSubmit}>
    <div>
      <input name="idCode"
              type="text"
              onChange={onChange}
      />
      <input 
        name="imageFiles"
        type="file"
        multiple="multiple"
        onChange={onChange2}
      />

    <input type="submit" value="전송" />
    </div>
  </form>
)
}
export default Result2Page;

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
import LearnTemplate from "../components/auth/LearnTemplate";



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
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);

  const inputRef = useRef();

  function Change (e) {
    setContent(e.target.value);
  }
  
  /*
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }


 */

    const formData = new FormData();

   const onImageUpload = e =>{
    for (let i = 0; i < e.target.files.length; i++) { 
      formData.append("imageFiles", e.target.files[i]);}
   }


   const onSubmit = e =>{
      e.preventDefault();
      
    
    
      formData.append("idCode", content)
  
    axios({
      url: '/api/image/learn/upload',
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
        if(response.status===200){
          alert(response.data);
        }
        console.log(response.data);
        alert(response.data);

        setLoading(false);
      })
      .catch(error => {
        alert(error.response.data);
       
        console.log(error);
        
      });
  }


  
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  
  return (
  <>
  <LearnTemplate>
  <form onSubmit={onSubmit}>
    <input 
    type="text"
    name="idCode"
    id="idCode"
    placeholder="idCode"
    onChange={Change}
  />

   <input
    type="file"
    multiple="multiple" 
    name="imageFiles"
    onChange={onImageUpload}
    
  />
  
  <Button type="submit">
      전송
  </Button >
  </form>
    <br></br>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/teacher">
    뒤로가기
  </Button>
 </LearnTemplate>
    
</>
);

  }
export default SettingUserThumbnail;


/*<input type="submit" value="전송" />*/

import React from "react";
import Button from "../components/common/Button";
import { useCallback } from "react";
import { useRef } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import styled,{css} from "styled-components";
import palette from '../lib/styles/palette';
import Loading from './Loading';
import ResultTemplate from "../components/auth/ResultTemplate";


const SubInfoBlock = styled.div`
  font-size:50px;
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
     
    `}
  color: ${palette.gray[6]};
  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[7]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size:50px;
   
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SettingUserThumbnail = () => {

  const [name, setName] = useState([]);
  const [probability, setProbability] =useState("");
  const [match, setMatch] = useState("?");
  const [ssn, setSsn] = useState([]);
  const [address, setAddress] = useState([]);
  const [tel, setTel] = useState([]);
  const [proname, setProName] = useState([]);
  const [date, setDate] = useState([]);
  
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
        setMatch(response.data.matchable)
        setSsn(response.data.missingSsn)
        setAddress(response.data.missingAddress)
        setTel(response.data.protectorTel)
        setProName(response.data.protectorName)
        setDate(response.data.missingDate)
        setMatch(response.data.matchable)
        
        console.log(response.data);
        
       
        
        console.log(response.data.firstName);
        setLoading(false);
        
      })
      .catch(error => {
        console.error(error.response.data);
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
    <ResultTemplate>
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
      
     
      <br>
      </br>
    <h1>이름:{name}</h1>
    <hr></hr>
   <h1 style={{color: "red"}}>일치 확률:{probability}%</h1>
    <hr></hr>
    <h1 style={{color: "blue"}}>매치 여부: {match}</h1>
   
    <SubInfoBlock>
      주민등록번호:{ssn}
      <br></br>
      주소:{address}
      <br></br>
      실종 날짜:{date}
      <br></br>
      보호자 연락처:{tel}
      <br></br>
      보호자 성함:{proname}
      <br></br>
    </SubInfoBlock>
    
  </div>
  
  </div>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/police">뒤로</Button>
  </ResultTemplate>
</>
);
}

export default SettingUserThumbnail;


/*
import React from "react";
import { useState } from "react";
import Axios  from "axios";

const ResultPage =()=>{
  const [ content, setContent] = useState("");

function onChange(e) {
  setContent(e.target.files);
}

const onSubmit = e =>{
  e.preventDefault();
  const formData = new FormData();
  
  formData.append("imageFiles", content);

  Axios.post("api/image/missing/upload", formData,{
    headers:{
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: progressEvent => {
      console.log('upload progress:' + Math.round(progressEvent.loaded/ progressEvent.total* 100)+ '%')
    }
  })
  .then(res=>{
    console.log(res);
  })
  .catch(err=>{
    console.log(err);
  });
};

return(
  <form onSubmit={onSubmit}>
    <div>
      <input name="imageFiles"
        type="file"
        multiple="multiple"
        onChange={onChange} />

      <input type="submit" value="upload" />
    </div>
  </form>
)
}
export default ResultPage;
*/





/*
import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';



function ResultPage(){


  
  
  return(
    <>
      <form action="api/image/missing/upload" method="post" enctype="multipart/form-data">
    <ul>
      <li>idCode <input type="text" name="idCode" /></li>
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
import React, {useState} from 'react';
import axios from 'axios';

 function App() {
  const [image, setImage] = useState([]);
  const formData = new FormData(); // 폼데이터 생성
  
  const addImageFile = (event) => {

    setImage(event.target.files);
    

  };
  
  const postImageFile = () => {
    formData.append('imageFiles', image);

   
    
    axios.post('/api/image/missing/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // 이렇게 들어가야함!
      },  
    })
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    });

  };
  
  return(
    <>
    <input type='file' name ="imageFiles" multiple="multiple" onChange={event => addImageFile(event)} />
    <button onClick={postImageFile}>전송</button>
    </>
  )
}
export default App;


*/
/*

import React from "react";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  state ={
    selectedFile:null
  }
  FileSelectedHandler = event =>{
    console.log(event.target.files)
  }

  fileUploadHandler=()=>{
      const fd = new FormData (); 
      fd.append("imageFiles", this.state.selectedFile);
      axios.post('/api/image/missing/upload', fd, {
        onUploadProgress: progressEvent => {
          console.log('upload progress:' + Math.round(progressEvent.loaded/ progressEvent.total* 100)+ '%')
        }
      })
      .then(res =>{
        console.log(res);
      });
  }
  render(){
  return(
    <>
      <input 
        type="file"
        multiple="multiple"
        onChange={this.FileSelectedHandler}  
      />

      <button onClick={this.fileUploadHandler}>upload</button>
    </>
  )
}
}
export default App;
*/

/*
import React from "react";

const createIssue = async () => {
  const formData = new FormData();

  const issue = {
    title,
    class: category,
    body,
    location: {
      lat: Number(globalRef.current.userLocation.lat),
      lng: Number(globalRef.current.userLocation.lng),
    },
  };
  formData.append("title", issue.title);
  formData.append("class", issue.class);
  formData.append("body", issue.body);
  formData.append("lat", issue.location.lat);
  formData.append("lng", issue.location.lng);
  formData.append("image", image);

  const { data } = await API.createIssue(formData);
  console.log(data);
};

export default createIssue;
*/


/*
import React, {useState} from 'react';
import axios from 'axios';

export default function App() {
  const [image, setImage] = useState();
  const formData = new FormData(); // 폼데이터 생성
  
  const addImageFile = event => {
    setImage(event.target.files);
  };
  
  const postImageFile = () => {
    formData.append('imageFiles', image);
   // string 타입을 보내고 싶은 경우 
    
    axios.post('/api/image/missing/upload', FormData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // 이렇게 들어가야함!
      }
    })
  };
  
  return(
    <>
    <input type='file' multiple="multiple" onChange={event => addImageFile(event)} />
    <button onClick={postImageFile}>전송</button>
    </>
  )
}
*/

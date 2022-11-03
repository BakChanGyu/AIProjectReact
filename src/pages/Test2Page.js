import React from "react";
import Button from "../components/common/Button";
import { useCallback } from "react";
import { useRef } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import styled,{css} from "styled-components";
import palette from '../lib/styles/palette';
import Loading from './Loading';
import Result2Template from "../components/auth/Result2Template";


const SubInfoBlock = styled.div`
font-size:30px;
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

  //토익
  const [name, setName] = useState([]);
  const [probability, setProbability] =useState("0");
  const [ssn, setSsn] = useState([]);
  const [address, setAddress] = useState([]);
  const [loc, setLoc] = useState([]);
  const [date, setDate] = useState([]);
  const [match, setMatch] = useState("?");
  
  //수능
  const [name2, setName2] = useState([]);
  const [probability2, setProbability2] =useState("0");
  const [ssn2, setSsn2] = useState([]);
  const [address2, setAddress2] = useState([]);
  const [loc2, setLoc2] = useState([]);
  const [date2, setDate2] = useState([]);

  //로딩
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
      url: '/api/image/toeic/upload',
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
        setSsn(response.data.toeicSsn)
        setAddress(response.data.toeicAddress)
        setLoc(response.data.toeicExamLoc)
        setDate(response.data.toeicExamDate)
        setMatch(response.data.matchable)
        
        console.log(response.data);
        
        console.log(response.data.firstName);

        setName2(response.data.firstName)
        setProbability2(response.data.firstProbability)
        setSsn2(response.data.csatSsn)
        setAddress2(response.data.csatAddress)
        setLoc2(response.data.csatExamLoc)
        setDate2(response.data.csatExamDate)


        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        console.log(error);
        
        alert(error.response.data);
      
        
      });
  }, []);




  const onUpload2Image = useCallback((e) => {
    if (!e.target.files) {
      return;
    }

   
    const formData = new FormData();
    
    for (let i = 0; i < e.target.files.length; i++) { 
      formData.append("imageFiles", e.target.files[i]);}
    
    axios({
      url: '/api/image/csat/upload',
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
        setName2(response.data.firstName)
        setProbability2(response.data.firstProbability)
        setSsn2(response.data.csatSsn)
        setAddress2(response.data.csatAddress)
        setLoc2(response.data.csatExamLoc)
        setDate2(response.data.csatExamDate)
        console.log(response.data);
        
        console.log(response.data.firstName);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        console.log(error);
        setLoading(false);
        
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
    <Result2Template >
    <Button>
    <input
      type="file"
      name="imageFiles"
      multiple="multiple"
      
      ref={inputRef}
      onChange={onUploadImage}
    />
    토익
    </Button>
    <br></br>
    <br></br>
    
    <div>
      {loading ? <Loading/> : null}
    
  
    <div>
    <h1>이름:{name}</h1>
    <hr></hr>
   <h1 style={{color: "red"}}>일치 확률:{probability}%</h1>
    <hr></hr>
    <h1 style={{color: "blue"}}>매치 여부: {match}</h1>
    <SubInfoBlock>
      수험생 주민등록번호:{ssn}
      <br></br>
      수험생 주소:{address}
      <br></br>
      토익 응시 장소:{loc}
      <br></br>
      토익 응시 날자:{date}
      
    </SubInfoBlock>

    

  </div>

  </div>
  <br></br>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/teacher">뒤로 </Button>
  <br></br>
  <br></br>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/test3">수능  </Button>
  </Result2Template>
</>
);
}

export default SettingUserThumbnail;
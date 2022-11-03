import React from "react";
import Button from "../components/common/Button";
import { useCallback } from "react";
import { useRef } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import styled,{css} from "styled-components";
import palette from '../lib/styles/palette';
import Loading from './Loading';
import Result3Template from "../components/auth/Result3Template";


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
       
        console.log(response.data);
        
        console.log(response.data.firstName);

        setName(response.data.firstName)
        setProbability(response.data.firstProbability)
        setSsn(response.data.csatSsn)
        setAddress(response.data.csatAddress)
        setLoc(response.data.csatExamLoc)
        setDate(response.data.csatExamDate)
        setMatch(response.data.matchable)

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
    <Result3Template >
    <Button>
    <input
      type="file"
      name="imageFiles"
      multiple="multiple"
      
      ref={inputRef}
      onChange={onUploadImage}
    />
    수능
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
    <h1 style={{color: "blue"}}>일치 여부:{match}</h1>
    <SubInfoBlock>
      수험생 주민등록번호:{ssn}
      <br></br>
      수험생 주소:{address}
      <br></br>
      수능 응시 장소:{loc}
      <br></br>
      수능 응시 날자:{date}
      
    </SubInfoBlock>

 
  
  </div>

  </div>
  <br></br>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/teacher">뒤로 </Button>
  <br></br>
  <br></br>
  <Button style={{ color: "white" , textDecoration: "none" }} to="/test2">토익  </Button>
  </Result3Template>
</>
);
}

export default SettingUserThumbnail;
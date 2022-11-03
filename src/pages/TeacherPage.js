import React from "react";
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import TeacherHeaderContainer from "../containers/common/TeacherHeaderContainer";
import styled from "styled-components";
import Background from "../image/exam2.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import School from "../image/school.svg";
import Student from "../image/student.svg";
import Footer3 from "../components/common/Footer3";
import Footer from "../components/common/Footer";

export const BackgoundIMG =  styled.img`
margin: 0 auto;
width: 100%;
height: 50%;
border-radius: 10%;
`;

export const Write = styled.div`
padding: 5px 10px;
	text-align: center;
	position: absolute;
	top: 30%;
	left: 0;
  color:white;
  font-size: 30px;
`;

const WhoIMG = styled.img `
margin: 0 auto;
width: 30%;
height: 30%;
`;

const TeacherPage =()=>{
    return(
        <>
            <TeacherHeaderContainer />
            <BackgoundIMG src= {Background} />
            <Write>
                 <div className='virtual'>
                    <span>ETS-TOEIC / 대학수학 능력시험</span>
                  
                     <br></br>
                <strong>
                필적 AI 도입!
                    <br></br>
                 필적 기반 수험생 식별
                </strong>
                </div>
            </Write>

            <Container >
            <h1>Who could be apply?</h1>
            <hr></hr>
            <Row>
            <Col>
            
            <div className="police">
            <WhoIMG src ={School} />
            <p>수능 응시자</p>
            </div>
        
          
            </Col>
            <Col>
            <div className="student">
            <WhoIMG src ={Student} />
            <p>토익 응시자</p>
            </div>
           
            </Col>
         
       
        </Row>
    
       </Container >
       <Footer3 />
        </>
    );
}
export default TeacherPage;
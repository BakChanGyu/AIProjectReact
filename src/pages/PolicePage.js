import React from 'react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import PoliceHeaderContainer from '../containers/common/PoliceHeaderContainer';
import Background from "../image/police_background.jpg";
import Person1 from "../image/person1.svg";
import Person2 from "../image/person2.svg";
import Person3 from "../image/person3.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer2 from '../components/common/Footer2';


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


const PolicePage =()=>{
    return(
       <>
            <PoliceHeaderContainer />
         
            <BackgoundIMG src= {Background} />
            <Write>
                 <div className='virtual'>
                    <span>KOREAN INTERNAATIONAL POLICE AGENCY</span>
                     <br></br>
                <strong>
                필적 AI 도입!
                    <br></br>
                 필적 기반 실종자 수사
                </strong>
                </div>
            </Write>

            <Container >
                
            <h1>Who could be apply?</h1>
            <hr></hr>
            <Row>
            <Col>
            
            <div className="police">
            <WhoIMG src ={Person1} />
            </div>
        
            <p>치매 환자</p>
            </Col>
            <Col>
           
            <div className="student">
            <WhoIMG src ={Person2} />
            </div>
      
            <p>청각 장애인</p>
            </Col>
            <Col>
            
            <div className="missing_person">
            <WhoIMG src ={Person3} />
            </div>
          
            <p>시각 장애인</p>
            </Col>    
       
        </Row>
       
       </Container >
       <Footer2 />
       
       </>
    );
}
export default PolicePage;



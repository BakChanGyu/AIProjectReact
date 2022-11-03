import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import IMG from "../image/pen.jpg";
import styled from 'styled-components';
import Header3Container from "../containers/common/Header3container";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Guide1Template from "../components/auth/Guide1Template";
import Guide2Template from "../components/auth/Guide2Template";
import Guide3Template from "../components/auth/Guide3Template";
import Guide4Template from "../components/auth/Guide4Template";
import Background from "../image/person1.svg";
import Background2 from "../image/person2.svg";
import Background3 from "../image/school.svg";
import Background4 from "../image/background2.jpg";

import Background5 from "../image/police_background.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";


import "../App.css";
import FooterContainer from "../containers/common/FooterContainer";
import Footer from "../../src/components/common/Footer";
import Header2Container from "../containers/common/Header2Container";
SwiperCore.use([Navigation, Pagination, Autoplay])


export const BackgroundIMG =  styled.img`
margin: 0 auto;
width: 100%;
height: 20%;
border-radius: 20%;

`;

export const BackgoundContainer =  styled.div`
margin: 0 auto;
width: 30%;
height: 30%;
border-radius: 20%;

`;

const WhoIMG = styled.img `
margin: 0 auto;
width: 30%;
height: 30%;
`;

const SidePage =()=>{


  

    return(
        <>
    
        <Header3Container />


            <BackgroundIMG src={Background4}/>
        

        <Container>
        <h1>ABOUT</h1>
      
            <hr></hr>
            <p>저희 AI 필적 웹사이트는</p>
            <p>딥러닝을 기반으로 필적 이미지로 신원확인을 해주는 시스템 입니다.</p>
            <hr></hr>
            <h1>TUTORIAL</h1>
        <Row>
            <Col>
                <Guide1Template/>
            </Col>
            <Col>
                <Guide2Template />
            </Col>
            <br />
        </Row>
        <Row>
            <Col>
                <Guide3Template/>
            </Col>
            <Col>
                <Guide4Template/>
            </Col>
        </Row>  
        <Header3Container />
        </Container>
       <Footer/>
        </>
    )
}
export default SidePage;
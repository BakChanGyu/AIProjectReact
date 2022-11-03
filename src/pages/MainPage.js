import React from "react";
import MainTemplate from "../components/auth/MainTemplate";
import logo  from "../image/search.svg";
import Main from '../image/main.jpg';
import styled from "styled-components";
import {Link} from "react-router-dom";


const BackgroundIMG = styled.img`
margin: 0 auto;
width: 100%;
height: 80%;
cursor: pointer;
`;

 const Write = styled.div`
    padding: 5px 10px;
	text-align: center;
	position: absolute;
	top: 45%;
	left: 42rem;
  color:white;
  font-size: 60px;
`;


function Test3Page (){
    return(
        <>
        <BackgroundIMG src={Main} />
        <Write>
                 <div className='virtual'>
                     <Link to="/side" style={{ color: "white" , textDecoration: "none" }}>
                <strong>
                   START
                </strong>
                </Link>
                </div>
            </Write>
        </>
    )
}

export default Test3Page; 



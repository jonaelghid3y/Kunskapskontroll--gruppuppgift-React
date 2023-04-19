import React from 'react'
import styled from 'styled-components'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {RiSpotifyFill} from 'react-icons/ri'
import {TbTrademark} from 'react-icons/tb'
import {FaCcMastercard} from 'react-icons/fa'
import { color } from 'framer-motion'


const Footer = () => {
  return (
    <FooterTop>
      <FooterContent className="footerContent">
        <div className="logoContainer">
          <h1>
          <TbTrademark size={20} color='white'/> BROKEN RECORDS
          </h1>
        </div>
        <div>
          <h3>
            Costumer service
          </h3>
          <CustomerService>
            <p>Contact us</p>
            <p>Order status</p>
            <p>Privacy policy & Cookies</p>
            <p>Return & QA</p>
          </CustomerService>
        </div>
        <div>
          <div className='socialHeadline'>
            <h3>
              Find us at
            </h3>
          </div>
          <SocialLogos>
            <AiOutlineInstagram size={25}/>
            <AiOutlineTwitter size={25} />
            <AiFillFacebook size={25}/>
            <RiSpotifyFill size={25}/>
          </SocialLogos>
        </div>
      </FooterContent>   

    </FooterTop >

  )
}

const FooterTop = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  aline-itenms: center;
  flex-direction: row;
  background-color: black;
`;

const FooterContent = styled.div`
  padding:30px;
  width: 2400px;
  height: 200px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const CustomerService = styled.ul`
  display: flex;

  & > * {
    margin: 20px;
    margin-top:10px;
    text-align: left;
  }
  &:hover {
    cursor: pointer;
  }
`;


const SocialLogos = styled.div`
display: flex;

& > * {
  margin: 20px;
  margin-top:10px;
  text-align: left;
}
&:hover {
  cursor: pointer;
}
& > * {
  margin-right: 10px;
}
& > svg:nth-of-type(1):hover {
  fill: pink;
}

& > svg:nth-of-type(2):hover {
  fill: #00acee;
}

& > svg:nth-of-type(3):hover {
  fill: #3b5998;
}

& > svg:nth-of-type(4):hover {
  fill: limegreen;
}

`;



export default Footer
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Foot>
      <Backgrond src={process.env.PUBLIC_URL + '/Group229.png'}/>
      <Container>
        <Left>
          <img src={process.env.PUBLIC_URL + '/Group225.png'}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor </p>
          <h5>© Copyright 2020 Nature</h5>
        </Left>
        <Right>
          <Information>
          <h5>Information</h5>
          <p>About Us</p>
          <p>Products</p>
          <p>Contact Us</p>
          <p>Terms of Serice</p>
          </Information>
          <Follow>
            <h5>Follow Us</h5>
            <img src={process.env.PUBLIC_URL + '/Group99.png'}/>
            <img src={process.env.PUBLIC_URL + '/Group100.png'}/>
            <img src={process.env.PUBLIC_URL + '/Group105.png'}/>
          </Follow>
        </Right>
      </Container>
    </Foot>
  );
}

const Foot = styled.div`
  margin: 20px 0 0;
  height: 360px;
  position: relative;
`;

const Backgrond = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
`;

const Container = styled.div`
  height: 250px;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 140px;
  align-items: left;

  img {
    margin: 5px 0 0;
    width: 175px;
    height: 57px;
  }

  p {
    margin: 30px 0 0;
    color: #ffffff;
    font-size: 14px;
    line-height: 1.8;

    &::after {
      margin: 30px 0 0;
      content: '';
      width: 80px;
      height: 2.5px;
      display: block;
      background: #00dbd0;
    }
  }

  h5 {
    color: #ffffff;
    font-size: 14px;
    margin: 10px 0;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h5 {
    color: #ffffff;
    font-size: 16px;
    margin: 10px 0;

    &::after {
      margin: 15px 0 0;
      content: '';
      width: 55px;
      height: 2.5px;
      display: block;
      background: #00dbd0;
    }
  }

`;

const Information = styled.div`
  p {
    color: #ffffff;
    font-size: 16px;
  }
`;

const Follow = styled.div`

  img {
    margin: 15px 20px 0 0;
  }
`;

export default Footer;

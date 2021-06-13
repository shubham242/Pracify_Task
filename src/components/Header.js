import React from 'react';
import Navbar from './Navbar.js';
import styled from 'styled-components';


function Header() {
  return (
    <Head>
      <Navbar/>
      <Heading>
        <Healthy>Healthy life with</Healthy>
        <Nature>Nature Organic</Nature>
        <Vegetables>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</Vegetables>
        <Explore>Explore Now</Explore>
      </Heading>
      <Container>
        <Box><img src={process.env.PUBLIC_URL + '/Group228.png'}/></Box>
      </Container>
    </Head>
  );
}

const Head = styled.div`
  height: 768px;
  margin: 0;
  padding: 20px 140px 0 140px;
  background-image: linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0));
  position: relative;
`;

const Heading = styled.div`
  margin-top: 160px;
  width: 450px;
`;

const Healthy = styled.div`
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  font-size: 36px;
  font-weight: normal;
  line-height: 1.33;
  color: #374b5c;
`;

const Nature = styled.div`
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  font-size: 56px;
  font-weight: bold;
  line-height: 1.32;
  color: #374b5c;
`;

const Vegetables = styled.div`
  margin: 40px 0 40px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  line-height: 1.35;
  color: #374b5c;
`;

const Explore = styled.div`
  width: 220px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #00dbd0;
  color: #ffffff;
  font-family: 'Noto Sans', sans-serif;
  border: solid 2px #ffffff;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #00dbd0;
    border: solid 2px #00dbd0;
  }
`;

const Container = styled.div`
  display: flex;
  width: 395px;
  height: 385px;
  background-color: #ffffff;
  position: absolute;
  bottom: 85px;
  right: 155px;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  width: 350px;
  height: 340px;
  justify-content: center;
  align-items: center;
  border: solid 3px #00dbd0;
`;

export default Header;

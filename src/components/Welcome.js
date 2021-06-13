import React from 'react';
import styled from 'styled-components';

function Welcome() {
  return (
    <Wel>
      <Container>
        <img src={process.env.PUBLIC_URL + '/Group114.png'}/>
        <h2>Welcome to Nature</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Container>
      <Cards>
          <img src={process.env.PUBLIC_URL + '/Group207.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group205.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group207.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group207.png'}/>
      </Cards>
    </Wel>
  );
}

const Wel = styled.div`
  padding: 100px 140px 0 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;

  h2 {
    margin: 20px 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.33;
    color: #374b5c;
  }

  p {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    line-height: 1.31;
    text-align: center;
    color: #374b5c;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 100%;
  margin: 80px 0;
`;

export default Welcome;

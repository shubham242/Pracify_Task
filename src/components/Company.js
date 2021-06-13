import React from 'react';
import styled from 'styled-components';

function Company() {

  function HandleClick(x) {
    for(var i=0;i<4;i++)
    {
      if(i!=x){
        document.getElementById(i).style.backgroundColor = "#374b5c";
      }
      else{
        document.getElementById(i).style.backgroundColor = "#00dbd0";
      }
    }
  };

  return (
    <Comp>
      <Container>
        <h2>Proudly presented by</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Container>
      <Logos>
          <img src={process.env.PUBLIC_URL + '/Group39.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group64.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group55.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group64.png'}/>
          <img src={process.env.PUBLIC_URL + '/Group39.png'}/>
      </Logos>
      <Dots>
          <li id="0" onClick={e=>HandleClick(0)}/>
          <li id="1" onClick={e=>HandleClick(1)}/>
          <li id="2" onClick={e=>HandleClick(2)}/>
          <li id="3" onClick={e=>HandleClick(3)}/>
      </Dots>
    </Comp>
  );
}

const Comp = styled.div`
  background-color: #fbfefe;
  padding: 80px 140px 0 140px;
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
    margin: 0 0 20px;
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

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  margin: 80px 0;

  &:nth-child(0) {
    width: 109px;
    height: 149px;
  }

  &:nth-child(1) {
    width: 124px;
    height: 137px;
  }

  &:nth-child(2) {
    width: 191px;
    height: 87px;
  }

  &:nth-child(3) {
    width: 124px;
    height: 137px;
  }

  &:nth-child(4) {
    width: 109px;
    height: 149px;
  }
`;

const Dots = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;

  li {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background: #374b5c;
    list-style: none;
    margin: 0 10px;
    transition: 0.2s;
  }

  li:first-child {
    background-color: #00dbd0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Company;

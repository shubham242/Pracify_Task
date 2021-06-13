import React from 'react';
import Profile from './Profile.js';
import Blog from './Blog.js';
import styled from 'styled-components';

function Main() {
  return (
    <Contain>
      <Profile/>
      <Middle>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        <SearchBar>
        <Input placeholder="Enter your email address"></Input>
        <Subscribe>Subscribe</Subscribe>
        </SearchBar>
      </Middle>
      <Blog/>
    </Contain>
  );
}

const Contain = styled.div`
  padding: 100px 140px 0 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Middle = styled.div`
  margin: 200px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 36px;
    font-weight: normal;
    color: #374b5c;
  }

  p {
    margin: 0 0 40px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: #374b5c;
  }
`;

const SearchBar = styled.div`
  height: 70px;
  width: 570px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  border: none;
  width: 400px;
  border-radius: 30px;
  outline: none;
  padding: 0 0 0 50px;
  font-size: 18px;
`;

const Subscribe = styled.button`
  width: 166px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
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
export default Main;

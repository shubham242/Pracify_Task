import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
      <NavBrand>
        <img src={process.env.PUBLIC_URL + '/Group220.png'}/>
        <NavTitle href="./">organic</NavTitle>
      </NavBrand>
      <NavMenu>
        <NavLink href="./">Home</NavLink>
        <NavLink href="./">Products</NavLink>
        <NavLink href="./">Blog</NavLink>
        <NavLink href="./">About Us</NavLink>
        <NavBtn>Contact</NavBtn>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  justify-content: space-between;
`;

const NavBrand = styled.div`
  display: flex;
  flex-direction: row;

`;

const NavTitle = styled.a`
  margin: 0 0 0 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 42px;
  font-weight: bold;
  line-height: 1.5;
  color: #374b5c;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #374b5c;
    text-decoration: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  gap: 50px;
`;

const NavLink = styled.a`
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.31;
  color: #374b5c;
  text-decoration: none;

  &::after {
    margin-top: 4px;
    content: '';
    width: 0px;
    height: 2px;
    display: block;
    background: #00dbd0;
    transition: 0.3s;
  }

  &:hover::after {
    width: 110%;
  }

  &:hover {
    cursor: pointer;
    color: #374b5c;
    text-decoration: none;
  }
`;

const NavBtn = styled.button`
  width: 140px;
  height: 45px;
  display: flex;
  border-radius: 10px;
  border: solid 2px #00dbd0;
  margin-bottom: 6px;
  justify-content:center;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;
  transition: 0.3s;
  background-color:inherit;

  &:hover {
    cursor: pointer;
    background-color: #00dbd0;
  }
`;

export default Navbar;

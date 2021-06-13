import React from 'react';
import styled from 'styled-components';

function Card(props) {
  return (
    <Post>
    <img src={props.source}/>
    <h3>Blog Post One</h3>
    <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed<br/>do eiusmod.</p>
    <h5>Read More</h5>
    </Post>
  );
}

function Blog() {
  return (
    <Section>
    <img src={process.env.PUBLIC_URL + '/Group114.png'}/>
    <h2>Read Our Blog</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
    <Wrapper>
      <Card source={process.env.PUBLIC_URL + '/card1.png'}/>
      <Card source={process.env.PUBLIC_URL + '/card2.png'}/>
      <Card source={process.env.PUBLIC_URL + '/card3.png'}/>
    </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  margin: 120px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px 0;
    font-size: 36px;
    font-weight: normal;
    color: #374b5c;
  }

  p {
    margin: 0 0 40px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #374b5c;
  }
`;

const Wrapper = styled.div`
  width: 960px;
  height: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
`;

const Post = styled.div`
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  }

  img {
    width: 280px;
    height: 180px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  h3 {
    color: #00dbd0;
    font-size: 18px;
    font-weight: normal;
    margin: 18px 0 0;
  }

  p {
    margin: 10px 0;
    line-height: 1.36;
    font-size: 14px;
  }

  h5 {
    font-size: 14px;
    font-weight: normal;
    &::after {
      margin: 10px auto 0;
      content: '';
      width: 50%;
      height: 2.5px;
      display: block;
      background: #00dbd0;
    }
  }

`;
export default Blog;

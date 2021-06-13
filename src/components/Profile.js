import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return(
    <Content>
      <DP><img src={process.env.PUBLIC_URL + '/Profile.jpeg'}/></DP>
      <h2>Shubham</h2>
      <Stars>
        <span class="material-icons-outlined">star_outline</span>
        <span class="material-icons-outlined">star_outline</span>
        <span class="material-icons-outlined">star_outline</span>
        <span class="material-icons-outlined">star_outline</span>
        <span class="material-icons-outlined">star_outline</span>
      </Stars>
      <p>Thank you for all the amazing produce and products you deliver each week…
      <br/>you make my life so easy an bring goodness into our family eating.
      <br/>I’ve been roasting a lot of brussel sprouts and</p>
    </Content>
  );
}

function Profile() {
  function onChange(a, b, c) {
  console.log(a, b, c);
  }

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return(
    <Prof>
      <img src={process.env.PUBLIC_URL + '/Group86.png'}/>
      <Review>
        <Carousel controls={false}>
          <Carousel.Item>
            <Slide/>
          </Carousel.Item>
          <Carousel.Item>
            <Slide/>
          </Carousel.Item>
          <Carousel.Item>
            <Slide/>
          </Carousel.Item>
          <Carousel.Item>
            <Slide/>
          </Carousel.Item>
        </Carousel>
      </Review>
    </Prof>
  );
}

const Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
`;

const DP = styled.div`
  margin: 30px 0 0;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;

const Review = styled.div`

  div{
    ol{
      li{
        border-radius: 50%;
        border: solid 2px #00dbd0;
        height: 8px;
        width: 8px;
        opacity: 1;
      }
      .active {
        background-color: #00dbd0;
      }
    }
  }
`;

const Content = styled.div`
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
    line-height: 3;
    text-align: center;
    color: #374b5c;
  }
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #00dbd0;
`;


export default Profile;

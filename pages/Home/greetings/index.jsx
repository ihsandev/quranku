import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  span {
    font-weight: bolder;
  }
`

const Greetings = () => (
  <div>
    <Title>
      WELCOME TO <span>QURANKU</span>
    </Title>
  </div>
)

export default Greetings;
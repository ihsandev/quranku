import React from 'react'
import HeaderLayout from './header';
import styled from 'styled-components';

const MainStyle = styled.main`
  margin: auto;
  max-width: 767.98px;
  padding: 1.5rem 1rem 1rem 1rem;
  box-sizing: border-box;
  border-left: 1.2px solid rgba(0,0,0,0.1);
  border-right: 1.2px solid rgba(0,0,0,0.1);
  min-height: 100vh;
  margin-top: 60px;
`

const MainLayout = ({children}) => {
  return (
    <>
      <HeaderLayout />
      <MainStyle>
        {children}
      </MainStyle>
    </>
  )
}

export default MainLayout;
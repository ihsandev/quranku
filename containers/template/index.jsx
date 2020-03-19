import React from 'react'
import HeaderLayout from './header';
import { MainStyle } from './styled'

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
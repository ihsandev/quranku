import styled from 'styled-components'
import { Color } from 'Utils'

export const Menu = styled.ul`
  display: flex;
  background-color: ${Color.light};
  justify-content: center;
  padding: 10px;
  border-bottom: 1.2px solid rgba(0,0,0,0.1);
`

export const MenuItem = styled.li`
  list-style: none;
  margin-right: 2rem;
  &:nth-last-of-type(){
    margin-right: 0;
  }
  &:nth-of-type(1).active,
  &:nth-of-type(1):hover {
    a {
       background-color: ${Color.softGreen};
     }
  }
  &:nth-of-type(2).active,
  &:nth-of-type(2):hover {
    a {
       background-color: ${Color.softBlue};
     }
  }
  &:nth-of-type(3).active,
  &:nth-of-type(3):hover {
    a {
       background-color: ${Color.softYellow};
     }
  }
  &.active,
  &:hover {
    a {
      box-shadow: 4px 4px 0 #eaeaea;
    }
  }
  a {
    display: block;
    text-decoration: none;
    padding: 10px;
    color: ${Color.dark};
    border: 1.5px solid ${Color.dark};
    font-weight: bold;
    transition: .1s box-shadow;
    border-radius: 3px;
  }
`
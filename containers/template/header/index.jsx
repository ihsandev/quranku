import React from 'react';
import { Link } from "Routes"
import styled from 'styled-components'
import { Color } from 'Utils'

const Menu = styled.ul`
  display: flex;
  background-color: ${Color.light};
  justify-content: center;
  padding: 10px;
  border-bottom: 1.2px solid rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const MenuItem = styled.li`
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

const Header = () => {
  return (
    <header>
      <nav>
        <Menu>
          <MenuItem className="active">
            <Link route="home">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link route="readQuran">
              Read Quran
            </Link>
          </MenuItem>
          <MenuItem>
            <Link route="about">
              About Quranku
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header;
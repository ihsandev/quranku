import React from 'react';
import { Link } from "Routes"
import { Menu, MenuItem } from './styled'

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
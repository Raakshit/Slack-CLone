import { Avatar } from '@mui/material';
import React from 'react';
import "./Header.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

const Header = () => {

  const [{user}] = useStateValue();
  return (
    <div className='header'>
        <div className='header__left'>
          <Avatar
          className='header__avatar'
          alt={user?.displayName}
          src= {user?.photoURL}
          />
          <AccessTimeIcon/>
        </div>
        <div className='header__search'>
          <SearchIcon/>
          <input type="text" placeholder='Search Rakshit Agarwal' />
        </div>
        <div className="header__right">
          {/* Help Icon */}
          <HelpOutlineIcon/>
        </div>
    </div>
  )
}

export default Header;
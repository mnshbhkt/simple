import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="topbarLogo"><a href="#main" className='topbarLogo2'>Simple^</a></span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className='searchIcon' />
          <input placeholder='Search here...' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
        <ul>
          <li><a href="#main">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="ls">
        <ul>
          <Link to='/login' style={{textDecoration:"none"}}>
          <li>Login</li>
          </Link>
          <Link to='/register' style={{textDecoration:"none"}}>
          <li>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

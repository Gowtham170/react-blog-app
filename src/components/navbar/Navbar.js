import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  
  const openMenu = () => {
    const menuIcon = document.querySelector('#menu-toggle-icon');
    const openMenu = document.querySelector('#menu');
    menuIcon.classList.toggle('activated');
    openMenu.classList.toggle('activated');
  }

  const scrollHeader = () => {
    const headerElement = document.querySelector('#header');
    if(window.scrollY >= 15) {
      headerElement.classList.add('activated');
    }
    else {
      headerElement.classList.remove('activated');
    }
  }

  const changeTheme = () => {
    const bodyElement = document.body;
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
    } else {
      localStorage.removeItem('currentTheme');
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    const bodyElement = document.body;
    const currentTheme = localStorage.getItem('currentTheme');
    
    if(currentTheme) {
      bodyElement.classList.add('light-theme');
    } 
  });

  return (
    <div className='header' id='header'>
      <div className='navbar container'>
        <a href='#'>
          <h3 className='logo'>NewsFlash</h3>
        </a>

        <div className='menu' id='menu'>
          <ul className='list'>
            <li className='list-item'>
              <a href='#' className='list-link current'>Home</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>Category</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>Reviews</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>News</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>Contact</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>Sign in</a>
            </li>
            <li className='list-item'>
              <a href='#' className='list-link'>Sign up</a>
            </li>
          </ul>
        </div>

        <div className='list list-right'>
          <button className='btn place-items-center' onClick={changeTheme} id='toggle-btn'>
            <i className='ri-sun-line sun-icon'></i>
            <i className='ri-moon-line moon-icon'></i>
          </button>
          {/* <button>
            <i className='ri-search-line'></i>
          </button> */}
          <button className='btn place-items-center screen-lg-hidden menu-toggle-icon' onClick={openMenu} id='menu-toggle-icon'>
            <i className='ri-menu-3-line open-menu-icon'></i>
            <i className='ri-close-line close-menu-icon'></i>
          </button>

          <a href='#' className='list-link screen-sm-hidden'>Sign up</a>
          <a href='#' className='list-link screen-sm-hidden btn sign-in-btn fancy-border'>
            <span>Sign up</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Navbar
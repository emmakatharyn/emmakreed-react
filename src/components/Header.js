import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className='header'>
      <Link className='header-link-home' to='home'>
        EKR | Dev Portfolio
      </Link>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <button id='colorToggle' onClick={toggleDarkMode}>
            <ion-icon
              className='color-theme-icon'
              name={darkMode ? "sunny" : "moon"}
            ></ion-icon>
          </button>
          <li>
            <NavLink to='about' className='main-nav-link'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='projects' className='main-nav-link'>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className='main-nav-link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className='btn-mobile-nav'>
        <ion-icon className='icon-mobile-nav' name='menu-outline'></ion-icon>
        <ion-icon className='icon-mobile-nav' name='close-outline'></ion-icon>
      </button>
    </header>
  );
}
export default Header;

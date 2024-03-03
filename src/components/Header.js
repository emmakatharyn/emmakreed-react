import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={isNavOpen ? "header nav-open" : "header"}>
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
            <NavLink
              to='about'
              className='main-nav-link'
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='projects'
              className='main-nav-link'
              onClick={handleNavLinkClick}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to='contact'
              className='main-nav-link'
              onClick={handleNavLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className='btn-mobile-nav' onClick={handleNavOpen}>
        <ion-icon
          className='icon-mobile-nav'
          name={isNavOpen ? "close-outline" : "menu-outline"}
          style={{ height: "48px", width: "48px", color: "#ff008c" }}
        ></ion-icon>
        {/* <ion-icon className='icon-mobile-nav' name='close-outline'></ion-icon> */}
      </button>
    </header>
  );
}
export default Header;

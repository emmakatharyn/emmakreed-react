import React from "react";

function Header() {
  return (
    <header className='header'>
      <a className='header-link-home' href='index.html'>
        EKR | Dev Portfolio
      </a>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <button id='colorToggle'>
            <ion-icon className='color-theme-icon' name='moon'></ion-icon>
          </button>
          <li>
            <a href='#about' className='main-nav-link'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='main-nav-link'>
              Work
            </a>
          </li>
          <li>
            <a href='#contact' className='main-nav-link'>
              Contact
            </a>
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

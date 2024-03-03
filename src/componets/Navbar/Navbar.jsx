import React, { useState } from 'react';
import style from './Navbar.module.css';  // Corrected the import statement
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <a className={style.title} href="/">
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/menuIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}  // Corrected the onClick event
        />
        <ul
          className={`${style.menuItems} ${menuOpen ? style.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {/* List items go here */}
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>  {/* Corrected the string value */}
          </li>
          <li>
            <a href='#contact'>Contact</a>  {/* Corrected the string value */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

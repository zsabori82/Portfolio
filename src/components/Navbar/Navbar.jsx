import React, { useState } from 'react';
import style from "./Navbar";

import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <Link className={style.title} to="/">
        Portfolio
      </Link>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={menuOpen ? getImageUrl('nav/menuIcon.png') : getImageUrl('nav/menuIcon.png')}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${style.menuItems} ${menuOpen ? style.menuOpen : ''}`} onClick={() => setMenuOpen(false)}>
          <li key="about">
            <Link to="/about">About</Link>
          </li>
          <li key="experience">
            <Link to="/experience">Experience</Link>
          </li>
          <li key="projects">
            <Link to="/projects">Projects</Link>
          </li>
          <li key="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

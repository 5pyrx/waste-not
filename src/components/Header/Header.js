import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';
import LogoImage from '../../assets/logo192.png';

const Header = () => (
  <div className={style.Header}>
    <NavLink exact to="/" className={style.LogoBox} activeClassName={style.activePage}>
      <img src={LogoImage} alt="Waste-not" className={style.Logo} />
      <p>Waste-Not</p>
    </NavLink>
    <ul className={style.NavigationItems}>
      <li>
        <NavLink
          exact to="/your-pantry"
          activeClassName={style.activePage}>
            Your Pantry
        </NavLink></li>
      <li className={style.Logout}>Log-out</li>
    </ul>
  </div>
);


export default Header;

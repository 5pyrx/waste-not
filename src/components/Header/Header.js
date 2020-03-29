import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from "../../firebase";
import { UserContext } from '../../providers/UserProvider';

import style from './Header.module.css';
import LogoImage from '../../assets/logo192.png';

const Header = () => {
  const user = useContext(UserContext);

  return(
    <div className={style.Header}>
      <NavLink exact to="/" className={style.LogoBox} activeClassName={style.activePage}>
        <img src={LogoImage} alt="Waste-not" className={style.Logo} />
        <p>Waste-Not</p>
      </NavLink>
      <ul className={style.NavigationItems}>
        {
          user ? (
            <ul className={style.AuthNavItems}>
              <li>
                <NavLink
                  exact to="/your-pantry"
                  activeClassName={style.activePage}>
                    Your Pantry
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact to="/your-pantry"
                  activeClassName={style.activePage}>
                    MEAL PLANNER
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact to="/your-pantry"
                  activeClassName={style.activePage}>
                    WASTE TRACKER
                </NavLink>
              </li>
            </ul>
          ) : (
            null
          )
        }
        {
          user ? (
            null
        ) : (
            <li className={style.SignUp}>
              <NavLink
                exact to="/signup"
                activeClassName={style.activePage}>
                  Sign up
              </NavLink>
            </li>
          )
        }
        <li className={style.Login}>
        {
          user ? (
            <React.Fragment>
              <NavLink
                exact to="/" onClick = {() => {auth.signOut()}}>
                  Log out
              </NavLink>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink
                exact to="/signin">
                  Log in
              </NavLink>
            </React.Fragment>
          )
        }
        </li>
      </ul>
    </div>
  );
};

export default Header;

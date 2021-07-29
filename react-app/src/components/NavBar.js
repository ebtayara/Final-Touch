import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './styling/NavBar.css';
import { login } from '../store/session';

const NavBar = () => {
const dispatch = useDispatch();
const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }
  return (
    <nav>
      <div className="nav_container">
        <div className="home_outer_container">
          <div className="home_inner_container">
            <NavLink to='/' exact={true} activeClassName='active' className="home">
              Final Touch
            </NavLink>
          </div>
        </div>
        <div className="login_outer_container">
          <div className="login_inner_container">
            <NavLink to='/login' exact={true} activeClassName='active' className="login">
              Login
            </NavLink>
          </div>
        </div>
        <div className="signup_outer_container">
          <div className="signup_inner_container">
            <NavLink to='/sign-up' exact={true} activeClassName='active' className="signup">
              Sign Up
            </NavLink>
          </div>
        </div>
        <div>
          <button onClick={(demoLogin)}>Demo User</button>
        </div>
        <div className="logout_outer_container">
          <div className="logout_inner_container">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

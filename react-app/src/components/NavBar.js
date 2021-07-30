import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './styling/NavBar.css';
import { login } from '../store/session';

const NavBar = () => {
const dispatch = useDispatch();
const history = useHistory();

const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
    history.push('/home')
  }
const auth_nav_bar = useSelector(state => state.session.user)

if (auth_nav_bar) {
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
        <div className="logout_outer_container">
          <div className="logout_inner_container">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
} else return (
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
      </div>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/session';
import { logout } from '../store/session';
import './styling/NavBar.css';

const NavBar = () => {
const dispatch = useDispatch();
const history = useHistory();

const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
    history.push('/home')
  };

const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

const auth_nav_bar = useSelector(state => state.session.user)

if (auth_nav_bar) {
  return (
    <nav>
      <div className="nav_container">
        <div className="home_outer_container">
          <div className="home_inner_container">
            <NavLink to='/home' exact={true} activeClassName='active' className="home">
              Final Touch
            </NavLink>
          </div>
        </div>
        <div className="car_detailing_outer_container">
          <div className="car_detailing_inner_container">
            <NavLink to='/car-detailing' exact={true} activeClassName='active' className="car_detailing">
              Car Detailing
            </NavLink>
          </div>
        </div>
        <div className="appointments_outer_container">
          <div className="appointments_inner_container">
            <NavLink to='/appointments' exact={true} activeClassName='active' className="car_detailing">
              Appointments
            </NavLink>
          </div>
        </div>
        <div className="reviews_outer_container">
          <div className="reviews_inner_container">
            <NavLink to='/reviews' exact={true} activeClassName='active' className="car_detailing">
              Reviews
            </NavLink>
          </div>
        </div>
        <div className="logout_outer_container">
          <div className="logout_inner_container">
            <button onClick={onLogout} className='logout'>Logout</button>
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
          <button onClick={(demoLogin)} className='demo'>Demo User</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

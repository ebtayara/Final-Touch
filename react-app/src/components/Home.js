import React from 'react';
import { NavLink } from 'react-router-dom';
import './styling/Home.css'


const Home = () => {
  return (
  <div className='home_splash'>
    <div className="home_title">
      {/* <h1>Let us
        <NavLink to='/car-detailing' exact={true} activeClassName='active' className="home_title">
        Groom
        </NavLink>
        Your Ride!</h1> */}
        <h1>Let us Groom Your Ride!</h1>
        <div className='cd_reroute_container'>
        <NavLink to='/car-detailing' exact={true} activeClassName='active' className="cd_reroute">
        Check us out
        </NavLink>
        </div>
    </div>
  </div>
  )
}

export default Home

import React from 'react';
import { NavLink } from 'react-router-dom';
import './styling/NotFound.css'

const NotFound = () => (
<div className='not_found_body'>
  <div className='not_found_container'>
    <div className='not_found_inner_container'>
    <h1>404 - Not Found!</h1>
    <NavLink to='/home' exact={true} className="home">
        Come back to us!
    </NavLink>
    </div>
  </div>
</div>
);

export default NotFound;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <NavLink to='/home' exact={true} className="home">
        Come back to us!
    </NavLink>
  </div>
);

export default NotFound;

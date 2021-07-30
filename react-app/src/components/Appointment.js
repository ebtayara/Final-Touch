import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {useDispatch, useSelector} from 'react-redux';
import './styling/Appointment.css';

const Appointment = () => {
  const user = useSelector(state => state.session.user)
  // const dispatch = useDispatch();
  const history = useHistory();

  if(!user) {
    history.push('/')
  };

  return (
    <div className='app_outer_container'>
      <div className='app_inner_container'>
        <h1>Appointments Page</h1>
      </div>
    </div>
  )
};

export default Appointment

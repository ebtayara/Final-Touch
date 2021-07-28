import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux'
import './styling/Appointment.css';

const Appointment = () => {
  const [] = useState()
  const user = useSelector(state => state.session.user)
  
}

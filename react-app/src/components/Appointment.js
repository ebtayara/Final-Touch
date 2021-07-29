import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {useDispatch, useSelector} from 'react-redux';
import {addAppointment, updateAppointment, removeAppointment} from '../store/appointment';
import './styling/Appointment.css';

const Appointment = () => {
  const [] = useState()
  const user = useSelector(state => state.session.user)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const updateFullName = (e) => {
    setFullName((e.target.value));
  };

  const updateEmail = (e) => {
    setEmail((e.target.value));
  };

  const updateAddress = (e) => {
    setAddress((e.target.value));
  };

  const updateNumber = (e) => {
    setNumber((e.target.value));
  };

  const onSubmit = async(e) => {
    e.preventDefault()
    await dispatch(newAppointment(full_name, email, address, phone_number))
  }

  if(!user) {
    history.push('/')
  }

  return (
    <div className='form_outer_container'>
      <div className='form_inner_container'>
        <form onSubmit={onSubmit}>
          <div className='name_field'>
            <label>Full Name</label>
            <input
              type='text'
              name='full_name'
              placeholder='Fist and Last Name'
              onChange={updateFullName}
              value={fullName}
            ></input>
          </div>
          <div className='email_field'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='email@ESP.domain'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='address_field'>
            <label>Address</label>
            <input
              type='text'
              name='address'
              placeholder='Street, City and State'
              onChange={updateAddress}
              value={address}
            ></input>
          </div>
          <div className='number_field'>
            <label>Phone Number</label>
            <input
              type='integer'
              name='phone_number'
              placeholder='Enter 10 Digit Number'
              onChange={updateNumber}
              value={phoneNumber}
            ></input>
          </div>
          <div className='submit_btn'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Appointment

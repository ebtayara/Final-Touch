import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {newAppointment} from '../store/appointment';
import './styling/CarDetailing.css';

const CarDetailing = () => {
  const user = useSelector(state => state.session.user);
  // const {app_id} = useParams();
  const appointment = useSelector(state => state.appointmentReducer.appointment);
  console.log('APP STATE*****', appointment)
  const app_id = appointment?.id;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('APP ID ****', app_id);

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
    // const formDeets = {
    //   full_name: fullName,
    //   email: email,
    //   address: address,
    //   phone_number: phoneNumber
    // }
    console.log('HELLO!')
    const formData = await dispatch(newAppointment(fullName, email, address, phoneNumber, history))
    console.log('*****************', formData)
    // if (formData) {
      // history.push(`/appointments/${app_id}`)
    // }
  };

  if(!user) {
    history.push('/')
  };

  return (
  <body className='cd_body'>
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
  </body>
  )
};

export default CarDetailing

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {newAppointment} from '../store/appointment';
import './styling/CarDetailing.css';

const CarDetailing = () => {
  const user = useSelector(state => state.session.user);
  // const {app_id} = useParams();
  const appointment = useSelector(state => state.appointment.appointment);
  // console.log('APP STATE*****', appointment)
  const app_id = appointment?.id;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log('APP ID ****', app_id);

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
    // console.log('HELLO!')

    const formData = await dispatch(newAppointment(fullName, email, address, phoneNumber))
    // console.log('*****************', formData)
    if(formData) {
      setErrors(formData)
    } else {
      history.push(`/appointments/${app_id}`)
    }
  };

  if(!user) {
    history.push('/')
  };

  return (
    <div className='form_outer_container'>
      <div className='cd_body'>
        <div className='cd_types'>
          <h1 className='services'>Services We Offer</h1>
          <h2 className='cd_type'>
            Basic and Waterless Mobile Car Wash
          </h2>
          <h2 className='cd_type'>
            Complete Car Interior Detailing
          </h2>
          <h2 className='cd_type'>
            Full Car Exterior Detailing
          </h2>
          <h2 className='cd_type'>
            Full Car Detailing
          </h2>
          <h2 className='cd_type'>
            Full Car Restoration
          </h2>
          <h2 className='cd_type'>
            Show-Car Detailing
          </h2>
        </div>
      <div className='form_inner_container'>
        <form onSubmit={onSubmit}>
          <div>
          {errors.map((error, i) => (
          <div key={i}>{error.slice(error.indexOf(':') + 1)}</div>
        ))}
          </div>
          <div>
            {/* <label>Full Name</label> */}
            <input className='name_field'
              type='text'
              name='full_name'
              placeholder='Fist and Last Name'
              onChange={updateFullName}
              value={fullName}
            ></input>
          </div>
          <div>
            {/* <label htmlFor='email'>Email</label> */}
            <input className='email_field'
              type='text'
              name='email'
              placeholder='email@ESP.domain'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            {/* <label>Address</label> */}
            <input className='address_field'
              type='text'
              name='address'
              placeholder='Street, City and State'
              onChange={updateAddress}
              value={address}
            ></input>
          </div>
          <div>
            {/* <label>Phone Number</label> */}
            <input className='number_field'
              type='integer'
              name='phone_number'
              placeholder='Enter Number Here'
              onChange={updateNumber}
              value={phoneNumber}
            ></input>
          </div>
          <div>
            <button className='submit_btn' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
};

export default CarDetailing

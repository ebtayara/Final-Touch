import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {editAppointment} from '../store/appointment';
import './styling/EditApp.css';

const EditApp = () => {
  const user = useSelector(state => state.session.user);
  const {id} = useParams();
  const appointment = useSelector(state => state.appointment.appointment);
  // const app_id = appointment?.id;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(app_id);

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
    const formData = await dispatch(editAppointment(fullName, email, address, phoneNumber, history, id))
    console.log('*****************', formData)
    if (formData) {
      history.push(`/appointments/${id}`)
    }
  };

  useEffect(() => {
    if (appointment) {
      setFullName(appointment.full_name)
      setEmail(appointment.email)
      setAddress(appointment.address)
      setNumber(appointment.phone_number)
    }
  }, [appointment])

  if(!user) {
    history.push('/')
  };
  // console.log('%%%%%%%%%%', fullName)

  return (
    <div className='edit_form_outer_container'>
      <div className='edit_form_inner_container'>
        <form onSubmit={onSubmit}>
          <div className='name_field'>
            <label className='form_labels'>Full Name</label>
            <input
              type='text'
              name='full_name'
              placeholder='Fist and Last Name'
              onChange={updateFullName}
              value={fullName}
              required
            ></input>
          </div>
          <div className='email_field'>
            <label className='form_labels' htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='email@ESP.domain'
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div className='address_field'>
            <label className='form_labels'>Address</label>
            <input
              type='text'
              name='address'
              placeholder='Street, City and State'
              onChange={updateAddress}
              value={address}
              required
            ></input>
          </div>
          <div className='number_field'>
            <label className='form_labels'>Phone Number</label>
            <input
              type='integer'
              name='phone_number'
              placeholder='Phone Number'
              onChange={updateNumber}
              value={phoneNumber}
              required
            ></input>
          </div>
          <div className='submit_btn_container'>
            <button className='submit_btn' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default EditApp

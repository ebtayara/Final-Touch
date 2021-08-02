import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../store/appointment';
import './styling/Appointment.css';

const Appointment = () => {
  const user = useSelector(state => state.session.user)
  const appointment = useSelector(state => state.appointmentReducer.appointment);
  // const dispatch = useDispatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();

  // console.log(id)
  // console.log(appointment)

useEffect(() => {
  (async() => {
    try {
      await dispatch(getData(id))
    } catch (err) {
      console.log(err);
    }
  })();
}, [dispatch, id]);

  if(!user) {
    history.push('/')
  };

  return (
    <div className='app_outer_container'>
      <div className='app_inner_container'>
        <h1>Appointments Page</h1>

        {appointment?.email}
      </div>
    </div>
  )
};

export default Appointment

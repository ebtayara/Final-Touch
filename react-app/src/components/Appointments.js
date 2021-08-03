import React, { useEffect } from 'react';
import {getAppointmentData} from '../store/appointment';
import './styling/Appointments.css';

useEffect(() => {
  await dispatch(getAppointmentData(user_id))
})

const Appointments = () => {
  return (
  <body>
    <div className='title'>
      <h1>Appointments Page</h1>
    </div>
  </body>
  )
}

export default Appointments;

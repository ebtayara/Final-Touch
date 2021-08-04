import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import {getAppointmentData} from '../store/appointment';
import './styling/Appointments.css';

const Appointments = () => {

const user = useSelector(state => state.session.user);
// const {id} = useParams();
const [appointments, setAppointments] = useState();

// useEffect(() => {(async() => {

// })
//   await dispatch(getAppointmentData(user_id))
// }, [])

useEffect(() => {
  async function grabData() {
    const response = await fetch(`/api/appointments/all/${user.id}`);
    const responseData = await response.json();
    setAppointments(responseData.appointments)
  }
  grabData();
}, []);

console.log(appointments)

if(appointments) {

  return (
  <div>
    <body>
      <div className='title'>
        <h1>Appointments Page</h1>
      </div>
      <div className='appointments'>
        <ul>
          {appointments.map(appointment => (
            <li key={user.id}>
              {appointment.full_name}{appointment.email}
              {appointment.address}
              {appointment.phone_number}
            </li>
          ))}
        </ul>
      </div>
    </body>
  </div>
    )
  }
  return null
}

export default Appointments;

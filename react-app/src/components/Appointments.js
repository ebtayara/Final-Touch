import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {appointmentData} from '../store/appointment';
import './styling/Appointments.css';

const Appointments = () => {

const user = useSelector(state => state.session.user);
const [appointments, setAppointments] = useState();
const dispatch = useDispatch();

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
  <div className='apps_body'>
    <body>
      <div className='app_title'>
        <h1>Appointments Page</h1>
      </div>
    <div className='appointments_container'>
      <div className='appointments'>
        <ul>
          {appointments.map(appointment => (
            <li key={user.id} className='app_details'>
              {appointment.full_name}{appointment.email}
              {appointment.address}
              {appointment.phone_number}
            <div>
              Tell us about your visit! We appreciate any
              <NavLink onClick={() => dispatch(appointmentData(appointment))}to={`/reviews/appointments/${appointment.id}`} exact={true} activeClassName='active' className="review_btn">
                feedback
              </NavLink>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </body>
</div>
    )
  }
  return null
}

export default Appointments;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { appointmentData, cancelAppointment } from '../store/appointment';
// import { cancelAppointment } from './Appointment';
import './styling/Appointments.css';

const Appointments = () => {

const user = useSelector(state => state.session.user);
// const appointment = useSelector(state => state.appointment.appointment)
const [appointments, setAppointments] = useState();
const dispatch = useDispatch();
// const history = useHistory();

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
}, [user.id]);

// console.log(appointments)

// const eraseAppointment = async(e) => {
//   e.preventDefault()
//   if (appointment.id) {
//   await dispatch(cancelAppointment(appointment.id))
//   history.push(`/appointments`)
//   }
// };

if(appointments) {

return (
  <>
  <div className='apps_body'>
    <div>
      {/* <div className='app_title'>
        <h1>Appointments</h1>
      </div> */}
    <div className='appointments_container'>
      <div className='appointments'>
        {user &&
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id} className='app_details'>
              {/* Thanks for booking {appointment.full_name}! You can use {appointment.email}
              to keep an eye on updates. In-house visits will
              <div>
              be made to {appointment.address}.
              We will contact you at {appointment.phone_number} if anything changes.
              </div> */}
              Name: {appointment.full_name}.{" "} Email: {appointment.email}.
              {" "} Address: {appointment.address}.{" "} Phone: {appointment.phone_number}.{" "}
            <div className='leave_review_container'>
              <div className='leave_review'>
            {" "}Tell us about your visit!{" "}
              <NavLink onClick={() => dispatch(appointmentData(appointment))}to={`/reviews/appointments/${appointment.id}`} exact={true} activeClassName='active' className="review_btn">
                Leave us a review.
              </NavLink>
              </div>
            </div>
            <div className='delete_review'>
              <button type='submit' onClick={async() => {
                await dispatch(cancelAppointment(appointment.id))
                window.location.reload()
              }} className='appointment_cancel'>Cancel</button>
            </div>
            </li>
          ))}
        </ul>
        }
      </div>
    </div>
  </div>
</div>
  </>
    )
  }
  //returns null with a valid JSX fragment
  return (<></>)
};

export default Appointments;

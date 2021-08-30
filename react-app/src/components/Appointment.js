import React, {useEffect} from 'react';
import {useHistory, useParams, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getData, deleteAppointment} from '../store/appointment';
import './styling/Appointment.css';

const Appointment = () => {
  const user = useSelector(state => state.session.user)
  const appointment = useSelector(state => state.appointment.appointment);
  // const dispatch = useDispatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  // const {user_id} = useParams();
  // console.log(id)
  // console.log(appointment)

  const cancelAppointment = async(e) => {
      e.preventDefault()
      await dispatch(deleteAppointment(id, user?.id))
      history.push(`/car-detailing`)
};

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
  <div>
    <div className='appointment_body'>
      <div className='app_outer_container'>
        <div className='app_inner_container'>
          <h1>Confirmation</h1>
          <div>
          We appreciate you wanting to visit! An appointment for {appointment?.full_name}
          </div>
          <div>
          has been booked, and a confirmation will eventually be programmed to be
          sent to {appointment?.email}.
          <div>
          Likewise, a text reminder will also eventually
          be sent to {appointment?.phone_number} an hour beforehand.
          </div>
          </div>
          <div>
          You can also dial 'insert business # here' to have us schedule an in-house visit
          to {appointment?.address}.
          </div>
          <div className='changes_outer_container'>
            <div className='changes_inner_container'>
              <div>
              <NavLink to={`/edit/${id}`} exact={true} activeClassName='active' className='appointment_edit'>
                Edit
              </NavLink>
              <button type='submit' onClick={cancelAppointment} className='appointment_cancel'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Appointment

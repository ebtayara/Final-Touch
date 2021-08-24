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
            <h3 className='cd_type_description'>
            Basic carwash services comes as an entry package, which includes washing the rims, doing a light wipe-down, and an exterior wash.
            We also have a higher quality carwash service, which includes an interior vacuum and full wipe-down, rims and window cleaning, exterior wash and dry, and tire dressing.
            </h3>
          <h2 className='cd_type'>
            Complete Car Interior Detailing
          </h2>
          <h3 className='cd_type_description'>
          The complete car interior detailing process involves cleaning the interior of your car thoroughly and spotlessly. We use a couple different techniques, such as steam-cleaning and vacuuming. A dirty interior can result in bad odour or the spread of allergens. For these reasons, you should care just as much about the interiors of your car as you do the exteriors.
          This is because the interiors get dirty pretty quickly. Our standard interior detailing involves vacuuming, brushing and steam cleaning, leather trimming, glass cleaning, re-vacuuming and wiping, and perfuming.
          Our full interior detailing involves all the standard procedures. The process begins with a ceramic coating application on your vehicle. We then follow it up with leather seat conditioning, a thorough wipe-down, shampooing seats and floor mats, dress plastic, and mould removal. You'll feel like you're driving a new car.
            </h3>
          <h2 className='cd_type'>
            Full Car Exterior Detailing
          </h2>
          <h3 className='cd_type_description'>
          This process involves restoring, vacuuming, and surpassing the initial condition of the exterior parts of your car. These include windows, wheels, and tires. If you want the outside of your car to look new again, this service is all you need. There are two ways to do this: one is by using a pressure washer and detergents, which is great for a black vehicle.
          You can also choose a waterless, complete car exterior detailing, which uses products such as polishes and degreasers. This is quite efficient since we don’t have to dry the bodywork to continue the process.
          The next step is polishing to restore your car’s shine before finishing off by waxing. The wax protects, seals the polish, and adds a glossy shine to your car. However, using a clay bar treatment before waxing removes all the contaminants from the car and restores its condition, making this service better than plain waxing.
            </h3>
          <h2 className='cd_type'>
            Full Car Detailing
          </h2>
          <h3 className='cd_type_description'>
          This is a combination of exterior and interior detailing. The package includes clay bar treatment and wax on the exterior, leather car seat conditioning, shampooing, stain removal, and the regular wash.
          Upon request, there are extra add-ons such as engine cleaning, bumper repair, trim repainting, glass chip repair, headlight restoration, water spots removal, pet hair cleaning, and a touch-up of paint.
            </h3>
          <h2 className='cd_type'>
            Full Car Restoration
          </h2>
          <h3 className='cd_type_description'>
          We specialize in high-end car restoration. We do full car detailing first, followed by window tinting and paint correction before applying a paint sealant to protect the vehicle for years.
          This service will leave your car looking better than it did when new. Full car restoration can take up to five full days depending on the vehicle’s condition.
            </h3>
          <h2 className='cd_type'>
            Show-Car Detailing
          </h2>
          <h3 className='cd_type_description'>
          We provide this service on limited high-end show cars that gather more mileage inside a truck than they do while on the road. It's our more pricey service, but you know what they say!
          You get what you pay for.
            </h3>
        </div>
      <div className='form_inner_container'>
        <h1>Like what you see? Your visit is only a click away!</h1>
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

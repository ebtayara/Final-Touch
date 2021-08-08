//actions
const APPOINTMENT_DATA = 'appointments/APPOINTMENT_DATA';
const APPOINTMENTS_DATA = 'appointments/APPOINTMENTS_DATA'
const ADD_APPOINTMENT = 'appointments/ADD_APPOINTMENT';
const UPDATE_APPOINTMENT = 'appointments/UPDATE_APPOINTMENT';
const REMOVE_APPOINTMENT = 'appointments/REMOVE_APPOINTMENT';

//creators
export const appointmentData = (appointment) => ({
    type: APPOINTMENT_DATA,
    payload: appointment
});

const appointmentsData = (appointments) => ({
    type: APPOINTMENTS_DATA,
    payload: appointments
});

const addAppointment = (appointment) => ({
    type: ADD_APPOINTMENT,
    payload: appointment
});

const updateAppointment = (appointment) => ({
    type: UPDATE_APPOINTMENT,
    payload: appointment
});

const removeAppointment = () => ({
    type: REMOVE_APPOINTMENT
});

//thunks
export const getData = (id) => async(dispatch) => {
    const response = await fetch(`/api/appointments/${id}`)
    console.log('APPOINTMENT DATA', response)
    if(response.ok) {
        const userAppointmentData = await response.json();
        dispatch(appointmentData(userAppointmentData));
    }
};

export const getAppointmentData = (user_id) => async(dispatch) => {
    const response = await fetch(`/api/appointments/all/${user_id}`)
    console.log('ALL APPOINTMENT DATA', response)
    if(response.ok) {
        const allUserAppointmentData = await response.json();
        dispatch(appointmentsData(allUserAppointmentData));
    }
};

export const newAppointment = (full_name, email, address, phone_number) => async(dispatch) => {
    phone_number = parseInt(phone_number)
    const response = await fetch('/api/appointments/new-appointment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            full_name,
            email,
            address,
            phone_number
        })
    });
    console.log(full_name, '<<NAME>>-------------------')
    console.log('YO!')
    console.log('RESPONSE FROM THUNK', response)
    if(response.ok) {
        console.log('RESPONSE IS OK', response.ok)
        const newAppointment = await response.json()
        dispatch(addAppointment(newAppointment));
        // history.push(`/appointments/${newAppointment.id}`);
        return null;
    } else if(response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['Fields must contain a valid entry']
    }
};

export const editAppointment = (full_name, email, address, phone_number, history, id) => async(dispatch) => {
    const response = await fetch(`/api/appointments/edit-appointment/${id}`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            full_name,
            email,
            address,
            phone_number
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updateAppointment(data))
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['Name is required']
    }
};

export const deleteAppointment = (id, user_id) => async(dispatch) => {
    const response = await fetch(`/api/appointments/delete-appointment/${id}/${user_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
        if(response.ok) {
            dispatch(removeAppointment());
    }
};

//reducer
export default function appointment(state = {appointment:null, appointments:null}, action) {
    switch (action.type) {
        case APPOINTMENT_DATA:
            return {...state, appointment: action.payload}
        case APPOINTMENTS_DATA:
            return {...state, appointments: action.payload}
        case ADD_APPOINTMENT:
            return {...state, appointment: action.payload}
        case UPDATE_APPOINTMENT:
            return {...state, appointment: action.payload}
        case REMOVE_APPOINTMENT:
            return state
        default:
            return state;
    }
};

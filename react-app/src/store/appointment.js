//actions
const APPOINTMENT_DATA = 'appointment/APPOINTMENT_DATA';
const ADD_APPOINTMENT = 'appointment/ADD_APPOINTMENT';
const UPDATE_APPOINTMENT = 'appointment/UPDATE_APPOINTMENT';
const REMOVE_APPOINTMENT = 'appointment/REMOVE_APPOINTMENT';

//creators
const appointmentData = (userData) => ({
    type: APPOINTMENT_DATA,
    payload: userData
});

const addAppointment = () => ({
    type: ADD_APPOINTMENT,
});

const updateAppointment = (userData) => ({
    type: UPDATE_APPOINTMENT,
    payload: userData
});

const removeAppointment = () => ({
    type: REMOVE_APPOINTMENT
});


//thunks
export const getData = (id) => async(dispatch) => {
    const response = await fetch(`/api/appointment/${id}`)
    if(response.ok) {
        const userAppointmentData = await response.json();
        dispatch(appointmentData(userAppointmentData));
    }
};

export const addAppointment = (full_name, email, address, phone_number) => async(dispatch) => {
    const response = await fetch('/api/appointment/addAppointment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            full_name,
            email,
            address,
            phone_number
        )
    });
    if(response.ok) {
        const newAppointment = await response.json()
        dispatch(addAppointment(newAppointment));
        return null;
    } else if(response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const updateAppointment = () => async(dispatch) => {

};

export const removeAppointment = () => async(dispatch) => {
    const response = await fetch('/api/appointment/removeAppointment', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
        if(response.ok) {
            dispatch(removeUser());
    }
};

//reducer
export default function appointmentReducer(state = {}, action) {
    switch (action.type) {
        case APPOINTMENT_DATA:
            return {userData: action.payload}
        case ADD_APPOINTMENT:
            return {...state, action}
        // case UPDATE_APPOINTMENT:
        //     return {...state, action.payload}
        case REMOVE_APPOINTMENT:
            return state
        default:
            return state;
    }
}

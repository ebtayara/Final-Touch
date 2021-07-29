//actions
const APPOINTMENT_DATA = 'appointments/APPOINTMENT_DATA';
const ADD_APPOINTMENT = 'appointments/ADD_APPOINTMENT';
const UPDATE_APPOINTMENT = 'appointments/UPDATE_APPOINTMENT';
const REMOVE_APPOINTMENT = 'appointments/REMOVE_APPOINTMENT';

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
    const response = await fetch(`/api/appointments/${id}`)
    if(response.ok) {
        const userAppointmentData = await response.json();
        dispatch(appointmentData(userAppointmentData));
    }
};

export const newAppointment = (full_name, email, address, phone_number) => async(dispatch) => {
    const response = await fetch('/api/appointments/new-appointment', {
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

export const editAppointment = (newFull_Name, newEmail, newAddress, newPhone_Number) => async(dispatch) => {
    const response = await fetch('/api/appointments/edit-appointment', {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newFull_Name,
            newEmail,
            newAddress,
            newPhone_Number
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updateAppointment(data))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const deleteAppointment = () => async(dispatch) => {
    const response = await fetch('/api/appointments/delete-appointment', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
        if(response.ok) {
            dispatch(removeAppointment());
    }
};

//reducer
export default function appointmentReducer(state = {}, action) {
    switch (action.type) {
        case APPOINTMENT_DATA:
            return {userData: action.payload}
        case ADD_APPOINTMENT:
            return {...state, action}
        case UPDATE_APPOINTMENT:
            return {...state, userData: action.payload}
        case REMOVE_APPOINTMENT:
            return state
        default:
            return state;
    }
};

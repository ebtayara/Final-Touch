//actions
const APPOINTMENT_DATA = 'appointment/APPOINTMENT_DATA';
const ADD_APPOINTMENT = 'appointment/ADD_APPOINTMENT';
const REMOVE_APPOINTMENT = 'appointment/REMOVE_APPOINTMENT';

//creators
const appointmentData = (userData) => ({
    type: APPOINTMENT_DATA,
    payload: userData
})

const addAppointment = () => ({
    type: ADD_APPOINTMENT,
});

const updateAppointment = () => ({
    type: UPDATE_APPOINTMENT
})

//might not need this?
const removeAppointment = () => ({
    type: REMOVE_APPOINTMENT
})


//thunks
export const getData = (id) => async(dispatch) => {
    const response = await fetch(`/api/appointment/${id}`)
    if(response.ok) {
        const userAppointmentData = await response.json();
        dispatch(appointmentData(userAppointmentData));
    }
}

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
    if (response.ok) {
        const newAppointment = await response.json()
        dispatch(addAppointment(newAppointment));
    }
};

export const updateAppointment = () => async(dispatch)

//reducer

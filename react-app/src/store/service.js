//actions
const GET_SERVICES = "services/LOAD_SERVICES";
const ADD_SERVICES = "services/ADD_SERVICES";
const EDIT_SERVICES = "services/EDIT_SERVICES";
const DELETE_SERVICES = "services/DELETE_SERVICES";

//action creators
const getServices = (services) => ({
  type: GET_SERVICES,
  payload: services,
});

//do I need one for one and one for multiple?
const addServices = (services) => ({
  type: ADD_SERVICES,
  payload: services,
});

const editServices = (services) => ({
  type: EDIT_SERVICES,
  payload: services,
});

const deleteServices = (services) => ({
  type: DELETE_SERVICES,
  payload: services,
});

//thunks

//reducer

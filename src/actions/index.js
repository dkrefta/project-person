import http from './http'


//getUsers

const startGetUsers = ( ) => { return { type: 'START_GET_USERS', ready: false}}
const completeGetUsers = ( )=> {return { type: 'COMPLETE_GET_USERS', data}}
const errorGetUsers = (err ) => {return { type: 'ERROR_GET_USERS', err}}

export const getUsers = () => {
  return (dispatch, getState ) => {
    dispatch(startGetUsers());
    //TODO Request with Axios
    console.log("Call me action GetUsers")
  }
}

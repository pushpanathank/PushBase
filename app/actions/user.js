import axios from '../utils/api';
import apiConfig from '../config/api';
import storage from '../utils/storage';

// Constants
const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CURRENT_USER = 'CURRENT_USER';
const USER_AVAILIBILITY_CHANGED = 'USER_AVAILIBILITY_CHANGED';
const CHANGE_PROFILE = 'CHANGE_PROFILE';
// Action Creators
const logout = () => ({ type: LOGOUT });
const saveToken = (token) => storage.set('token' ,token);

export const authenticate = payloads => dispatch => {
  return axios.post('/v1/login',  {payloads: { user: payloads}
  }).then(res => {
      if(res.status == 200){
        saveToken(res.data.token);
        dispatch({ type: LOGIN, data: res.data })
        return res
      } else {
        return res
      }
    })
}

export const changeProfilePicture = payloads => dispatch => {
  return axios.post('/v1/me/picture',  {payloads: { image_attributes: payloads}
  }).then(res => {
      if(res.status == 200){
        saveToken(res.data.token);
        dispatch({ type: CHANGE_PROFILE, data: res.data })
        return res
      } else {
        return res
      }
    })
}

export const initiateForgotpassword = payloads => dispatch => {
  return axios.post('/v1//forgot-password',  {payloads: { user: payloads}
  }).then(res => {
    return res
  })
}

export const fetchCurrentUser = payloads => dispatch => {
  return axios.get('/v1/me',  {
  }).then(res => {
      if(res.status == 200){
        saveToken(res.data.token);
         dispatch({ type: CURRENT_USER, data: res.data })
        return res
      } else {
        return res
      }
    })
}

export const logoutUser = () => dispatch => {
  return new Promise(resolve => {
    saveToken('');
    dispatch( logout() );
    resolve({ message: 'logout'})
  });
  
}

export const switchAvailability = availability => dispatch => {
  return axios.post('/v1/switch-availability',  {payloads: { status: availability}
  }).then(res => {
      if(res.status == 200){
        dispatch({ type: USER_AVAILIBILITY_CHANGED, data: res.data })
        return res
      } else {
        return res
      }
    })
}

export const signup = payloads => dispatch => {
  return axios.post('/v1/signup',  {payloads: { user: payloads}
  }).then(res => {
      if(res.status == 200){
        saveToken(res.data.token);
        dispatch({ type: SIGNUP, data: res.data })
        return res
      } else {
        return res
      }
    })
}
import axios from '../utils/api';
import url from '../config/api';
import apiConfig from '../config/api';
import storage from '../utils/storage';
import { ActionTypes } from '../constants/';

// Action Creators
const saveToken = (token) => storage.set('token' ,token);

export const signin = payloads => dispatch => {
  dispatch({ type: ActionTypes.LOADING, isLoading: true });
  return axios.post(url.signin,  {payloads: payloads})
  .then(res => {
    // console.log("res", res.data);
    dispatch({ type: ActionTypes.LOADING, isLoading: false });
      if(res.status == 200){
        if(res.data.status==200){
          saveToken(res.data.token);
          dispatch({ type: ActionTypes.SIGNIN, data: res.data.data.user });
        }
        return res.data
      } else {
        return res
      }
    });
}


export const signup = payloads => dispatch => {
  dispatch({ type: ActionTypes.LOADING, isLoading: true });
  return axios.post(url.signup,  {payloads: payloads}).then(res => {
    // console.log("res", res.data);
    dispatch({ type: ActionTypes.LOADING, isLoading: false });
      if(res.status == 200){
        return res.data;
      } else {
        return res;
      }
    })
}

export const logoutUser = () => dispatch => {
  return dispatch({ type: ActionTypes.LOGOUT });
  
}

export const changeProfilePicture = payloads => dispatch => {
  return axios.post('/v1/me/picture',  {payloads: { image_attributes: payloads}
  }).then(res => {
      if(res.status == 200){
        saveToken(res.data.token);
        dispatch({ type: ActionTypes.CHANGE_PROFILE, data: res.data })
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
         dispatch({ type: ActionTypes.CURRENT_USER, data: res.data })
        return res
      } else {
        return res
      }
    })
}

export const switchAvailability = availability => dispatch => {
  return axios.post('/v1/switch-availability',  {payloads: { status: availability}
  }).then(res => {
      if(res.status == 200){
        dispatch({ type: ActionTypes.USER_AVAILIBILITY_CHANGED, data: res.data })
        return res
      } else {
        return res
      }
    })
}

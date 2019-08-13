// Initial State
import { initialState } from './initial';
import { ActionTypes } from '../constants/';

// Reducers (Modifies The State And Returns A New State)
const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.SIGNIN: {
      return {
        ...state,
        user: action.data
      }
    }
    case ActionTypes.SIGNUP: {
      return {
        ...state,
      }
    }
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        user: null
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default auth;
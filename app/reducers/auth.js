// Initial State
import { initialState } from './initial';

// Reducers (Modifies The State And Returns A New State)
const auth = (state = initialState, action) => {
  switch (action.type) {
    // Logged In
    case 'LOGGED_IN': {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.payload,
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
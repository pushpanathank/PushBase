// Imports: Reducers
import auth from './auth';
import common from './common';
import { reducer as formReducer } from 'redux-form';

// Redux: Root Reducer
const rootReducer = {
  auth: auth,
  common: common,
  form: formReducer
};

// Exports
export default rootReducer;
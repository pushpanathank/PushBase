// Imports: Reducers
import auth from './auth';
import counter from './counter';

// Redux: Root Reducer
const rootReducer = {
  authReducer: auth,
  counterReducer: counter,
};

// Exports
export default rootReducer;
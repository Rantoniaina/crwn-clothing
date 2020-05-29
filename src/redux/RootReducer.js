import { combinedReducers } from 'redux';
import userReducer from './User/User.reducer';

export default combinedReducers({
  user: userReducer,
});

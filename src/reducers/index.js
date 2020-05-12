import counterReducer from './counter'
import isLoggedInReducer from './isLoggedIn'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedInReducer
})

export default reducers

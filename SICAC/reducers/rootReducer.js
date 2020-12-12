import { combineReducers } from '@reduxjs/toolkit'
import authentication from './authentication/authenticationSlice'
import user from './authentication/userSlice'

export default combineReducers({
  authentication,
  user
})

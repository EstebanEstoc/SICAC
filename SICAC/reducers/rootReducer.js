import { combineReducers } from '@reduxjs/toolkit'
import authentication from './Authentication/authenticationSlice'
import user from './Authentication/userSlice'

export default combineReducers({
  authentication,
  user
})

import { combineReducers } from '@reduxjs/toolkit'
import authentication from './authentication/authenticationSlice'
import user from './authentication/userSlice'
import scenarios from './scenarios/scenariosSlice'
import createScenario from './scenarios/createScenarioSlice'

export default combineReducers({
  authentication,
  user,
  scenarios,
  createScenario
})

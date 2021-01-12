import { combineReducers } from '@reduxjs/toolkit'
import authentication from './authentication/authenticationSlice'
import user from './authentication/userSlice'
import scenarios from './scenarios/scenariosSlice'
import createScenario from './scenarios/createScenarioSlice'
import configuration from './configuration/configurationSlice'

export default combineReducers({
  authentication,
  user,
  scenarios,
  createScenario,
  configuration
})

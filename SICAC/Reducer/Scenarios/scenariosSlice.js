import { createSlice } from '@reduxjs/toolkit'

import { createScenario } from './lib/createScenario'

/**
 * @todo Implement reducers
 */

const scenariosSlice = createSlice({
  name: 'scenarios',
  initialState: {
    lastId: 0,
    scenarios: []
  },
  reducers: {
    addScenario: (state, action) =>
      state.scenarios.push(createScenario(action.payload, ++state.lastId)),
    deleteScenario: state => state,
    turnOffScenario: state => state,
    turnOnScenario: state => state,
    editScenario: state => state
  }
})

export const {
  addScenario,
  deleteScenario,
  turnOffScenario,
  turnOnScenario,
  editScenario
} = scenariosSlice.actions

export default scenariosSlice.reducer

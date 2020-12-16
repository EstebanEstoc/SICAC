import { createSlice } from '@reduxjs/toolkit'

import {
  createScenario,
  editScenario,
  enableScenario,
  disableScenario
} from './lib/createScenario'

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
    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.type
     * @param {Object} action.payload
     * @param {String} action.payload.name
     * @param {Object[]} action.payload.conditions
     * @param {Object[]} action.payload.actions
     */
    addScenario: (state, action) => {
      state.lastId++
      state.scenarios.push(createScenario(action.payload, state.lastId))
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.type
     * @param {Object} action.payload
     * @param {Number} action.payload.id Id of the scenario
     */
    deleteScenario: (state, action) => {
      return state.scenarios.filter(scenario => scenario.id !== action.payload)
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.type
     * @param {Object} action.payload
     * @param {Number} action.payload.id Id of the scenario
     */
    switchOffScenario: (state, action) => {
      disableScenario(state, action.payload)
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.type
     * @param {Object} action.payload
     * @param {Number} action.payload.id Id of the scenario
     */
    switchOnScenario: (state, action) => {
      enableScenario(state, action.payload)
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.type
     * @param {Object} action.payload
     * @param {Number} action.payload.id Id of the scenario
     * @param {Object} action.payload.values
     * @param {String} action.payload.values.name
     * @param {Object[]} action.payload.values.conditions
     * @param {Object[]} action.payload.values.actions
     */
    modifyScenario: (state, action) =>
      editScenario(action.payload.values, action.payload.id, state)
  }
})

export const {
  addScenario,
  deleteScenario,
  switchOffScenario,
  switchOnScenario,
  modifyScenario
} = scenariosSlice.actions

export default scenariosSlice.reducer

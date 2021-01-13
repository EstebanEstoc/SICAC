import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: '', conditions: [], actions: [] }

const createScenarioSlice = createSlice({
  name: 'inCreationScenario',
  initialState,
  reducers: {
    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {Object[]} action.payload
     */
    addAction: (state, action) => {
      state.actions.push(action.payload)
    },

    /**
     *
     * @param {Object} state
     * @param {Number} index
     */

    removeAction: (state, index) => {
      state.actions.splice(index.payload, 1)
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {Object[]} action.payload
     */
    addCondition: (state, action) => {
      state.conditions.push(action.payload)
    },

    /**
     *
     * @param {Object} state
     * @param {Number} index
     */
    removeCondition: (state, index) => {
      state.conditions.splice(index.payload, 1)
    },

    clear: state => initialState,

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String]} action.payload
     */
    addName: (state, action) => {
      return { ...state, name: action.payload }
    }
  }
})

export const {
  addAction,
  removeAction,
  removeCondition,
  addCondition,
  clear,
  addName
} = createScenarioSlice.actions

export default createScenarioSlice.reducer

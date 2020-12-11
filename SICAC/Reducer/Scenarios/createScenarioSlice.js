import { createSlice } from '@reduxjs/toolkit'

const createScenarioSlice = createSlice({
  name: 'inCreationScenario',
  initialState: { name: '', if: [], then: [] },
  reducers: {
    addAction: (state, action) => {
      state.then.push(action.payload)
    },
    addConditions: (state, action) => {
      state.if.push(action.payload)
    },
    clear: state => {},
    addName: (state, action) => {
      return { ...state, name: action.payload }
    }
  }
})

export const {
  addAction,
  addConditions,
  clear,
  addName
} = createScenarioSlice.actions

export default createScenarioSlice.reducer

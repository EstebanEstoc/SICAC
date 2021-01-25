import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  triggeredCalendarID: []
}

const triggeredCalendarSlice = createSlice({
  name: 'triggeredCalendar',
  initialState,
  reducers: {
    addTriggeredID: (state, action) => {
      state.triggeredCalendarID.push(action.payload)
    },
    clearTiggeredID: state => {
      state.triggeredCalendarID = []
    }
  }
})

export const {
  addTriggeredID,
  clearTiggeredID
} = triggeredCalendarSlice.actions

export default triggeredCalendarSlice.reducer

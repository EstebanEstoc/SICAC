import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  triggeredCalendarID: []
}

const triggeredCalendarSlice = createSlice({
  name: 'triggeredCalendar',
  initialState,
  reducers: {
    addTriggeredID: (state, action) => state.push(action.payload)
  }
})

export const {} = triggeredCalendarSlice.actions

export default triggeredCalendarSlice.reducer

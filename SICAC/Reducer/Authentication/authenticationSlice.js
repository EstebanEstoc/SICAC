import { createSlice } from '@reduxjs/toolkit'

const authenticationSlice = createSlice({
  name: 'isAuth',
  initialState: false,
  reducers: {
    toggleAuth: state => !state
  }
})

export const { toggleAuth } = authenticationSlice.actions

export const authSelector = state => state.isAuth
export default authenticationSlice.reducer

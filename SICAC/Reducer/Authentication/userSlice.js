import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signIn } from '../../services/authentication/providers/GoogleSignIn'

export const signInGoogleAPI = createAsyncThunk(
  'user/signInGoogleAPI',
  async thunkAPI => {
    const userInfo = await signIn()
    return userInfo
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    clearUserInfo: state => null
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [signInGoogleAPI.fulfilled]: (state, action) => {
      // Add user to the state array
      return action.payload
    },
    [signInGoogleAPI.rejected]: (state, action) => {
      // Add user to the state array
      throw new Error(action.error.message)
    }
  }
})

export const { clearUserInfo } = userSlice.actions

export default userSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signIn } from '../../services/authentication/providers/GoogleSignIn'

const signInGoogleAPI = createAsyncThunk(
  'user/signInGoogleAPI',
  async thunkAPI => {
    const userInfo = await signIn()
    return userInfo
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    clearUserInfo: state => {}
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [signInGoogleAPI.fulfilled]: (state, action) => {
      // Add user to the state array
      state = action.payload
    }
  }
})

export const { clearUserInfo, signInGoogle } = userSlice.actions

export default userSlice.reducer

import authenticationReducer from '../../../reducers/authentication/authenticationSlice'
import {
  toggleAuthFalse,
  toggleAuthTrue
} from '../../../reducers/authentication/authenticationSlice'

describe('authentication Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' }
      const initialState = false
      expect(authenticationReducer(undefined, action)).toEqual(initialState)
    })
  })

  describe('toggleAuthTrue', () => {
    test('must set the auth field to true', () => {
      const action = { type: toggleAuthTrue.type }

      expect(authenticationReducer(undefined, action)).toMatchSnapshot()
    })
  })
  describe('toggleAuthFalse', () => {
    test('must set the auth field to false', () => {
      const action = { type: toggleAuthFalse.type }

      expect(authenticationReducer(undefined, action)).toMatchSnapshot()
    })
  })
})

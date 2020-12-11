import createScenarioReducer from '../../../reducers/scenarios/createScenarioSlice'
import {
  addAction,
  addCondition,
  clear,
  addName
} from '../../../reducers/scenarios/createScenarioSlice'

describe('createScenario Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' }
      const initialState = { name: '', if: [], then: [] }
      expect(createScenarioReducer(undefined, action)).toEqual(initialState)
    })
  })

  describe('addAction', () => {
    test('must push an action in the then field', () => {
      const actionScenario = {
        id: 33,
        options: {
          lat: -123,
          lng: 13
        }
      }
      const action = { type: addAction.type, payload: actionScenario }

      expect(createScenarioReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('addCondition', () => {
    test('must push an condition in the if field', () => {
      const conditionScenario = {
        id: 35,
        options: {
          lat: -123,
          lng: 13
        }
      }
      const action = { type: addCondition.type, payload: conditionScenario }

      expect(createScenarioReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('clear', () => {
    test('must reset to initialState', () => {
      const action = { type: clear.type }

      expect(createScenarioReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('addName', () => {
    test('must add name to the name field', () => {
      const name = "toto's scenario"
      const action = { type: addName.type, payload: name }

      expect(createScenarioReducer(undefined, action)).toMatchSnapshot()
    })
  })
})
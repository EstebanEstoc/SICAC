import MockDate from 'mockdate'

import scenariosReducer, {
  addScenario,
  deleteScenario,
  switchOnScenario,
  switchOffScenario,
  modifyScenario
} from '../../../reducers/scenarios/scenariosSlice'

const dummy_scenario = {
  name: 'Mon scenario fun',
  if: [
    {
      id: 34,
      options: {}
    },
    {
      id: 75,
      options: {
        auth: '33442243654234_fg'
      }
    }
  ],
  then: [
    {
      id: 45,
      options: {}
    },
    {
      id: 30,
      options: {
        lng: -45,
        lat: 35
      }
    }
  ]
}

beforeAll(() => {
  MockDate.set('2000-11-22')
})

afterAll(() => {
  MockDate.reset()
})

describe('scenarios Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' }
      const initialState = { lastId: 0, scenarios: [] }
      expect(scenariosReducer(undefined, action)).toEqual(initialState)
    })
  })
  describe('addScenario', () => {
    test('must add a new scenario to the list of scenarios', () => {
      const action = { type: addScenario.type, payload: dummy_scenario }
      expect(scenariosReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('deleteScenario', () => {
    test('must delete an existing scenario', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = { type: deleteScenario.type, payload: 1 }
      expect(
        scenariosReducer(
          scenariosReducer(scenariosReducer(undefined, initAction), initAction),
          action
        )
      ).toMatchSnapshot()
    })
    test('must do nothing if no scenario match', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }

      const action = { type: deleteScenario.type, payload: 5 }
      expect(
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toMatchSnapshot()
    })
    test('must return the initial state if no scenario was in the state', () => {
      const action = { type: deleteScenario.type, payload: 1 }
      expect(scenariosReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('switchOnScenario', () => {
    test('must activate an already activated scenario ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = { type: switchOnScenario.type, payload: 1 }
      expect(
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toMatchSnapshot()
    })
    test('must activate a disabled scenario ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const disableAction = { type: switchOffScenario.type, payload: 1 }
      const action = { type: switchOnScenario.type, payload: 1 }
      expect(
        scenariosReducer(
          scenariosReducer(
            scenariosReducer(undefined, initAction),
            disableAction
          ),
          action
        )
      ).toMatchSnapshot()
    })
    test('must throw an error if no scenario match the id ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = { type: switchOnScenario.type, payload: 5 }
      expect(() =>
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toThrowError(new Error('No such scenario'))
    })
  })

  describe('switchOffScenario', () => {
    test('must disable an already disabled scenario ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = { type: switchOffScenario.type, payload: 1 }
      expect(
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toMatchSnapshot()
    })
    test('must asiable an enable scenario ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const disableAction = { type: switchOnScenario.type, payload: 1 }
      const action = { type: switchOffScenario.type, payload: 1 }
      expect(
        scenariosReducer(
          scenariosReducer(
            scenariosReducer(undefined, initAction),
            disableAction
          ),
          action
        )
      ).toMatchSnapshot()
    })
    test('must throw an error if no scenario match the id ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = { type: switchOffScenario.type, payload: 5 }
      expect(() =>
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toThrowError(new Error('No such scenario'))
    })
  })

  describe('modifyScenario', () => {
    const values = {
      name: 'edited one',
      if: [
        {
          id: 87,
          options: {
            auth: '356'
          }
        },
        {
          id: 2,
          options: {}
        }
      ],
      then: [
        {
          id: 45,
          options: {}
        },
        {
          id: 30,
          options: {
            lng: -45,
            lat: 35
          }
        }
      ]
    }
    test('must edit an existing scenario ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }

      const action = { type: modifyScenario.type, payload: { id: 1, values } }
      expect(
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toMatchSnapshot()
    })
    test('must throw an error if no scenario match the id ', () => {
      const initAction = { type: addScenario.type, payload: dummy_scenario }
      const action = {
        type: modifyScenario.type,
        payload: {
          id: 5,
          values
        }
      }
      expect(() =>
        scenariosReducer(scenariosReducer(undefined, initAction), action)
      ).toThrowError(new Error('No such scenario'))
    })
  })
})

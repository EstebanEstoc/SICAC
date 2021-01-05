import configurationReducer from '../../../reducers/configuration/configrationSlice'
import {
  modifyHouseWifi,
  setRelativesNumbers,
  modifyDoctoreNumber,
  modifyDefaultCalendarId,
  modifySmarWatch,
  modifyCardiacThreshold,
  clearHouseWifi,
  clearRelativesNumbers,
  clearDoctorNumber,
  clearSmartWatch,
  clearCardiacThreshold,
  clearDefaultCalendarID,
  clearConfig
} from '../../../reducers/configuration/configrationSlice'

describe('configuration Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' }
      const initialState = {
        houseWifi: '',
        relativesNumbers: [],
        doctorNumber: '',
        smartWatch: '',
        cardiacThreshold: 180,
        defaultCalendarID: ''
      }
      expect(configurationReducer(undefined, action)).toEqual(initialState)
    })
  })

  describe('modifyHouseWifi', () => {
    test('must add the Wifi SSID to houseWifi', () => {
      const modifyHouseWifiPayload = 'wifi_SSID_test'
      const action = {
        type: modifyHouseWifi.type,
        payload: modifyHouseWifiPayload
      }
      expect(configurationReducer(undefined, action)).toMatchSnapshot()
    })
  })

  describe('setRelativesNumbers', () => {
    test('must add Relatives Numbers to relativesNumbers', () => {
      const setRelativesNumbersPayload = ['+33606060606', '+33606060606']
      const action = {
        type: setRelativesNumbers.type,
        payload: setRelativesNumbersPayload
      }
      expect(configurationReducer(undefined, action)).toMatchSnapshot()
    })
  })
})

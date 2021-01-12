import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  houseWifi: '',
  relativesNumbers: [],
  doctorNumber: '',
  smartWatch: '',
  cardiacThreshold: 180,
  defaultCalendarID: '',
  wizardState:false,
}

const configurationSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {

    /**
     *
     * @param {Object} state
     *
     */

    toggleWizTrue: (state) => {state.wizardState = true},
    toggleWizFalse: (state) => {state.wizardState = false},

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.payload Wifi SSID
     */
    modifyHouseWifi: (state, action) => {
      state.houseWifi = action.payload
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String[]} action.payload Array of phone number
     */
    setRelativesNumbers: (state, action) => {
      state.relativesNumbers = action.payload
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.payload Phone Number
     */
    modifyDoctoreNumber: (state, action) => {
      state.doctorNumber = action.payload
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.payload
     */
    modifySmarWatch: (state, action) => {
      state.smartWatch = action.payload
    },
    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {String} action.payload GoogleCalendar ID
     */
    modifyDefaultCalendarID: (state, action) => {
      state.defaultCalendarID = action.payload
    },

    /**
     *
     * @param {Object} state
     * @param {Object} action
     * @param {Number} action.payload
     */
    modifyCardiacThreshold: (state, action) => {
      state.cardiacThreshold = action.payload
    },

    clearHouseWifi: state => {
      state.houseWifi = initialState.houseWifi
    },

    clearRelativesNumbers: state => {
      state.relativesNumbers = initialState.relativesNumbers
    },

    clearDoctorNumber: state => {
      state.doctorNumber = initialState.doctorNumber
    },

    clearSmartWatch: state => {
      state.smartWatch = initialState.smartWatch
    },

    clearCardiacThreshold: state => {
      state.cardiacThreshold = initialState.cardiacThreshold
    },

    clearDefaultCalendarID: state => {
      state.defaultCalendarID = initialState.defaultCalendarID
    },

    clearConfig: state => initialState
  }
})

export const {
  modifyHouseWifi,
  setRelativesNumbers,
  modifyDoctoreNumber,
  modifyDefaultCalendarID,
  modifySmarWatch,
  modifyCardiacThreshold,
  clearHouseWifi,
  clearRelativesNumbers,
  clearDoctorNumber,
  clearSmartWatch,
  clearCardiacThreshold,
  clearDefaultCalendarID,
  clearConfig,
  toggleWizTrue,
  toggleWizFalse

} = configurationSlice.actions

export default configurationSlice.reducer

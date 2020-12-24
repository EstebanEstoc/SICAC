import { GoogleSignin } from 'react-native-google-signin'

export const GoogleCalendarHeader = new Headers()

export const GoogleCalendarConfig = async () => {
  const tokens = await GoogleSignin.getTokens()
  GoogleCalendarHeader.append('Authorization', 'Bearer ' + tokens.accessToken)
}

/**
 * Get the list of the connected user's Calendar
 */
export const GetGoogleCalendarList = async () => {
  try {
    const res = await fetch(
      'https://www.googleapis.com/calendar/v3/users/me/calendarList',
      {
        method: 'GET',
        headers: GoogleCalendarHeader
      }
    )
    const json = await res.json()
    return json.items
  } catch (error) {
    console.error(error)
  }
}

/**
 * Get Events from a specific Calendar
 *
 * @param {String} calendarID
 */
export const GetGoogleCalendarEventList = async calendarID => {
  try {
    const res = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/' +
        calendarID +
        '/events',
      {
        method: 'GET',
        headers: GoogleCalendarHeader
      }
    )
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

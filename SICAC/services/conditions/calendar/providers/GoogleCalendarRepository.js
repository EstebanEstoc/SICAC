import * as GoogleCalendarAPI from './GoogleCalendarAPI'

GoogleCalendarAPI.GoogleCalendarConfig()

export const GetPrimaryCalendarID = async () => {
  const calendars = await GoogleCalendarAPI.GetGoogleCalendarList()
  const primary = calendars.filter(calendar => calendar.primary)
  return primary[0].id
}

export const GetCalendarsNameList = () => {}

export const GetCalendarID = calendarName => {}

export const GetEventsTitleList = calendarID => {}

export const GetEventID = (eventTitle, calendarID) => {}

export const SearchEventsByTitle = calendarID => {}

export const GetEventDates = (eventID, calendarID) => {}

export const GetEventDuration = (eventID, calendarID) => {}

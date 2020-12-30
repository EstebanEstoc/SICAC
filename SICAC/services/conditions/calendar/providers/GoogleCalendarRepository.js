import * as GoogleCalendarAPI from './GoogleCalendarAPI'

GoogleCalendarAPI.GoogleCalendarConfig()

export const GetPrimaryCalendarID = async () => {
  try {
    const calendars = await GoogleCalendarAPI.GetGoogleCalendarList()
    console.log(calendars)
    const primary = calendars.filter(calendar => calendar.primary)
    return primary[0].id
  } catch (error) {
    console.log(error)
  }
}

export const GetCalendarsNameList = async () => {
  try {
    const calendars = await GoogleCalendarAPI.GetGoogleCalendarList()
    const calendarList = []
    calendars.forEach(calendar => {
      calendarList.push({
        id: calendar.id,
        name: calendar.summary
      })
    })
    return calendarList
  } catch (error) {
    console.log(error)
  }
}

export const GetEventsTitleList = async calendarID => {
  try {
    const events = await GoogleCalendarAPI.GetGoogleCalendarEventList(
      calendarID
    )
    const nextEvents = events.filter(event => {
      return new Date(event.end.dateTime) - new Date() > 0
    })
    const eventList = []
    nextEvents.forEach(event => {
      eventList.push({
        id: event.id,
        name: event.summary
      })
    })
    return eventList
  } catch (error) {
    console.log(error)
  }
}

export const SearchEventsByTitle = async (calendarID, searchQuery) => {
  try {
    const eventList = await GetEventsTitleList(calendarID)
    const searchedEvents = eventList.filter(event =>
      new RegExp(searchQuery, 'i').test(event.name)
    )
    return searchedEvents
  } catch (error) {
    console.log(error)
  }
}

export const GetEventDates = async (eventID, calendarID) => {
  try {
    const event = await GoogleCalendarAPI.GetGoogleCalendarEvent(
      eventID,
      calendarID
    )
    return {
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime)
    }
  } catch (error) {
    console.log(error)
  }
}

export const GetEventDuration = async (eventID, calendarID) => {
  try {
    const dates = await GetEventDates(eventID, calendarID)
    return Math.abs(dates.end - dates.start) / 36e5
  } catch (error) {
    console.log(error)
  }
}

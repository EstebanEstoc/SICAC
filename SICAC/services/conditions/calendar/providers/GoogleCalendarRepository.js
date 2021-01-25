import * as GoogleCalendarAPI from './GoogleCalendarAPI'

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

export const GetFutureEventList = async calendarID => {
  try {
    const events = await GoogleCalendarAPI.GetGoogleCalendarEventList(
      calendarID
    )
    const nextEvents = events.filter(event => {
      return new Date(event.end.dateTime) - new Date() > 0
    })
    const eventList = []
    nextEvents.forEach(event => {
      eventList.push(event)
    })
    return eventList
  } catch (error) {
    console.log(error)
  }
}

export const SearchEventsByTitle = async (calendarID, searchQuery) => {
  try {
    const eventList = await GetFutureEventList(calendarID)
    const searchedEvents = eventList.filter(event =>
      new RegExp(searchQuery, 'i').test(event.summary)
    )
    return searchedEvents
  } catch (error) {
    console.log(error)
  }
}
export const GetEventByID = async (eventID, calendarID) => {
  try {
    return await GoogleCalendarAPI.GetGoogleCalendarEvent(eventID, calendarID)
  } catch (error) {
    console.log(error)
  }
}

export const GetEventDates = event => {
  return {
    start: new Date(event.start.dateTime),
    end: new Date(event.end.dateTime)
  }
}

export const GetEventDuration = event => {
  const dates = GetEventDates(event)
  return Math.abs(dates.end - dates.start) / 36e5
}

export const EventIsCurrent = event => {
  const eventDates = GetEventDates(event)
  return eventDates.start - new Date() <= 0 && eventDates.end - new Date() >= 0
}

export const EventIsIn60Minutes = event => {
  const eventDates = GetEventDates(event)
  const current = new Date()
  return eventDates.start - current > 35e5 && eventDates.start - current < 37e5
}

export const GetEventLocation = event => {
  return event.location
}

export const GetEventData = (event, queryDataName) => {
  const data = JSON.parse(event.description)
  return data[queryDataName]
}

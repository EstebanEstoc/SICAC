import { useSelector } from 'react-redux'
import {
  EventIsCurrent,
  EventIsIn30Minutes,
  GetEventData,
  GetEventDuration,
  GetEventLocation,
  SearchEventsByTitle,
  GetEventByID,
  GetFutureEventList
} from './providers/GoogleCalendarRepository'

import { store } from '../../../store/store'

export const EVENTS_NAME = {
  PILLS: 'Pills',
  WALK: 'Walk',
  APPOINTMENT: 'Appointment',
  FORM: 'Form'
}

export const DATA_NAME = {
  PILLS: 'Pills',
  FORM_ID: 'FormID'
}

export const GetEventsTitleList = async () => {
  const CALENDAR_ID = store.getState().configuration.defaultCalendarID
  const events = await GetFutureEventList(CALENDAR_ID)
  const eventList = []
  events.forEach(event => {
    eventList.push({
      title: event.summary,
      id: event.id
    })
  })
  return eventList
}

export const getPillCondition = async () => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const pillsEvents = await SearchEventsByTitle(
      CALENDAR_ID,
      EVENTS_NAME.PILLS
    )
    if (pillsEvents) {
      const pillsEvent = pillsEvents.filter(event => EventIsCurrent(event))
      if (pillsEvent.length === 1) {
        return {
          execute: true,
          pillsToTake: GetEventData(pillsEvent[0], DATA_NAME.PILLS)
        }
      } else {
        return { execute: false }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const haveToWalkConditon = async () => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const walkEvents = await SearchEventsByTitle(CALENDAR_ID, EVENTS_NAME.WALK)
    if (walkEvents) {
      const walkEvent = walkEvents.filter(event => EventIsCurrent(event))
      if (walkEvent.length === 1) {
        return {
          execute: true,
          duration: GetEventDuration(walkEvent[0])
        }
      } else {
        return {
          execute: false
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const haveAnAppointment = async () => {
  try {
    const appointmentEvents = await SearchEventsByTitle(
      CALENDAR_ID,
      EVENTS_NAME.APPOINTMENT
    )
    if (appointmentEvents) {
      const appointmentEvent = appointmentEvents.filter(event =>
        EventIsIn30Minutes(event)
      )
      if (appointmentEvent.length === 1) {
        return {
          execute: true,
          where: GetEventLocation(appointmentEvent[0]),
          duration: GetEventDuration(appointmentEvent[0])
        }
      } else {
        return { execute: false }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const answerForm = async () => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const formEvents = await SearchEventsByTitle(CALENDAR_ID, EVENTS_NAME.FORM)
    if (formEvents) {
      const formEvent = formEvents.filter(event => EventIsCurrent(event))
      if (formEvent.length === 1) {
        return {
          execute: true,
          formId: GetEventData(formEvent[0], DATA_NAME.FORM_ID)
        }
      } else {
        return {
          execute: false
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const currentEvent = async eventID => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const event = await GetEventByID(eventID, CALENDAR_ID)
    if (event) {
      return {
        execute: EventIsCurrent(event),
        where: GetEventLocation(event),
        duration: GetEventDuration(event)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const in30MinutesEvent = async eventID => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const event = await GetEventByID(eventID, CALENDAR_ID)
    return {
      execute: EventIsIn30Minutes(event),
      where: GetEventLocation(event),
      duration: GetEventDuration(event)
    }
  } catch (error) {
    console.log(error)
  }
}

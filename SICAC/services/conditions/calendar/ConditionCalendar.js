import { useSelector } from 'react-redux'
import {
  EventIsCurrent,
  EventIsIn60Minutes,
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
  FORM_ID: 'FormID',
  APPOINTMENT: 'Name'
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
          data: {
            pillsToTake: GetEventData(pillsEvent[0], DATA_NAME.PILLS)
          },
          eventId: appointmentEvent[0].id
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
          data: {
            duration: GetEventDuration(walkEvent[0])
          },
          eventId: appointmentEvent[0].id
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
        EventIsIn60Minutes(event)
      )
      if (appointmentEvent.length === 1) {
        return {
          execute: true,
          data: {
            where: GetEventLocation(appointmentEvent[0]),
            duration: GetEventDuration(appointmentEvent[0]),
            name: GetEventData(appointmentEvent[0], DATA_NAME.APPOINTMENT)
          },
          eventId: appointmentEvent[0].id
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
          data: { formId: GetEventData(formEvent[0], DATA_NAME.FORM_ID) },
          eventId: appointmentEvent[0].id
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
        data: {
          where: GetEventLocation(event),
          duration: GetEventDuration(event)
        },
        eventId: appointmentEvent[0].id
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const in60MinutesEvent = async eventID => {
  try {
    const CALENDAR_ID = store.getState().configuration.defaultCalendarID
    const event = await GetEventByID(eventID, CALENDAR_ID)
    return {
      execute: EventIsIn60Minutes(event),
      data: {
        where: GetEventLocation(event),
        duration: GetEventDuration(event)
      },
      eventId: appointmentEvent[0].id
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {Object} scenario
 */
export const parseCalendarInfo = (scenario, calendarReponse) => {
  scenario.actions.forEach(action => {
    if (action.calendar && action.calendar.length > 0) {
      action.calendar.forEach(event => {
        action.core =
          action.core + getCalendarInfoString(event, calendarReponse)
      })
    }
  })
}

const getCalendarInfoString = (event, calendarResponse) => {
  switch (event) {
    case 'Have to walk':
      return `You have to walk for ${calendarResponse.data.duration} hours. `
    case 'Have an appointment':
      return `You have an appointement in 30 minutes at ${calendarResponse.data.where} with ${calendarResponse.data.name} for ${calendarResponse.data.duration} hours. `
    case 'Have to take pills':
      let response = 'You have to take the following pills:'
      calendarResponse.data.pillsToTake.forEach((pill, index) => {
        if (index !== 0) {
          response = ', ' + response + pill.dosage + ' of ' + pill.name
        } else if (index === 0) {
          response = response + pill.dosage + ' of ' + pill.name
        }
      })
      response + '. '
      return reponse
    case 'Have to answer a form':
      return ''
    default:
      return ''
  }
}

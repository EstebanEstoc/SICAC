import { store } from '../../store/store'
import * as CalendarConditions from '../conditions/calendar/ConditionCalendar'
import * as SunriseSunsetConditions from '../conditions/sunriseSunsetAPI/ConditionSunriseSunset'
import { addTriggeredID } from '../../reducers/calendar/triggeredCalendarSlice'
import { ChangeFormActionStatus } from '../actions/Form/Form'
import { schedulePushNotification } from '../actions/Notifications/Notification'
import { sendSMS } from '../actions/SMS/SMS'

const verificationScript = async () => {
  const scenarios = store.getState().scenarios
  for (const scenario of scenarios.scenarios) {
    if (scenario.active) {
      const verifiedConditions = []
      const calendarResult = []
      for (const condition of scenario.conditions) {
        const result = await verifyCondition(condition)
        if (result.execute) {
          if (result.name && result.name.startsWith('Have to')) {
            if (
              !CalendarConditions.IsAlreadyTriggered(
                result.eventId,
                store.getState().triggeredCalendar.triggeredCalendarID
              )
            ) {
              verifiedConditions.push(result.execute)
              store.dispatch(addTriggeredID(result.eventId))
              calendarResult.push({ data: result.data, name: result.name })
            } else {
              verifiedConditions.push(false)
            }
          }
        } else if (typeof result.execute === 'undefined') {
          verifiedConditions.push(result)
        } else {
          verifiedConditions.push(result.execute)
        }
      }
      if (verifiedConditions.every(value => value)) {
        if (calendarResult.length > 0) {
          calendarResult.forEach(result => {
            CalendarConditions.parseCalendarInfo(scenario, result)
          })
        }
        scenario.actions.forEach(action => {
          runAction(action, scenario.id)
        })
      }
    }
  }
}

const verifyCondition = async condition => {
  switch (condition.type) {
    case 'AtHome':
      // TODO implement
      return false
    case 'AwayHome':
      // TODO implement
      return false
    case 'CalendarForm':
      return await CalendarConditions.answerForm()
    case 'DayTime':
      return await SunriseSunsetConditions.isItDaytime()
    case 'NightTime':
      return await SunriseSunsetConditions.isItNighttime()
    case 'CalendarWalk':
      return await CalendarConditions.haveToWalkConditon()
    case 'ConnectedHeadphones':
      return false
    case 'ConnectedSpeaker':
      return false
    case 'CalendarAppointment':
      return await CalendarConditions.haveAnAppointment()
    case 'CalendarPill':
      return await CalendarConditions.getPillCondition()
    case 'AtAdress':
      return false
    case 'AwayAdress':
      return false
    case 'HeartRate':
      return false
    default:
      return false
  }
}

const runAction = (action, scenarioId) => {
  switch (action.type) {
    case 'FormSMS':
      ChangeFormActionStatus(scenarioId, 1, store.dispatch)
      break
    case 'Form':
      ChangeFormActionStatus(scenarioId, 1, store.dispatch)
      break
    case 'LaunchMusic':
      console.log('Launching Music')
      break
    case 'LightOn':
      console.log('Turning Light on')
      break
    case 'LightOff':
      console.log('Turning Light off')
      break
    case 'SendMail':
      console.log('Sending Mail')
      break
    case 'SendNotif':
      schedulePushNotification(action.options.title, action.options.core)
      break
    case 'OpenShutters':
      console.log('Opening Shutters')
      break
    case 'CloseShutters':
      console.log('Closing Shutters')
      break
    case 'SendSMS':
      action.options.to.forEach(number => {
        sendSMS(number, action.options.core)
      })
      break
    case 'Pedometer':
      console.log('Triggering Pedometer')
      break
    default:
      break
  }
}

export default verificationScript

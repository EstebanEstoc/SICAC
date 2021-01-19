import { smsPermission } from './actions/SMS/SMS'
import { contactsPermission } from './actions/SMS/Contacts'
import { notificationPermissions } from './actions/Notifications/Notification'

const askPermissions = () => {
  smsPermission()
    .then(contactsPermission())
    .then(notificationPermissions())
    .catch(error => {
      alert(error)
    })
}

export default askPermissions

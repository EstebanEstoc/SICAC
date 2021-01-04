import Contacts from 'react-native-contacts'
import { PermissionsAndroid } from 'react-native'

export const contactsPermission = async () => {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Contacts Access',
      message: 'SICAC wants to access your contact list',
      buttonPositive: 'Agree'
    }
  )
}

export const getContacts = async () => {
  try {
    if ((await contactsPermission()) === PermissionsAndroid.RESULTS.GRANTED) {
      const contacts = await Contacts.getAll()
      const contactList = []
      contacts.forEach(contact => {
        if (contact.phoneNumbers.length > 1) {
          contact.phoneNumbers.forEach(number => {
            contactList.push({
              id: contact.recordID + number.label,
              name:
                contact.givenName +
                ' ' +
                contact.familyName +
                ' ' +
                number.label,
              phone: number.number
            })
          })
        } else if (contact.phoneNumbers.length === 1) {
          contactList.push({
            id: contact.recordID,
            name: contact.givenName + ' ' + contact.familyName,
            phone: contact.phoneNumbers[0].number
          })
        }
      })
      return contactList
    }
    throw new Error('Permission denied')
  } catch (error) {
    console.warn(error)
    alert(error)
  }
}

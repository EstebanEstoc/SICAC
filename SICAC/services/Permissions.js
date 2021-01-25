import { PermissionsAndroid } from 'react-native'


const askPermissions = async () => {
  return await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    PermissionsAndroid.PERMISSIONS.SEND_SMS
  ])
}

export default askPermissions

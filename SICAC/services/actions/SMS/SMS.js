import { NativeModules, PermissionsAndroid } from 'react-native'

export const DirectSms = NativeModules.DirectSms

export const sendSMS = async (mobileNumber, bodySMS) => {
  try {
    if ((await smsPermission()) === PermissionsAndroid.RESULTS.GRANTED) {
      DirectSms.sendDirectSms(mobileNumber, bodySMS)
    }
  } catch (error) {
    console.warn(error)
    alert(error)
  }
}

export const smsPermission = async () => {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.SEND_SMS,
    {
      title: 'Send SMS',
      message: 'SICAC wants to send SMS',
      buttonPositive: 'Agree'
    }
  )
}

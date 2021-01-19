import * as Notifications from 'expo-notifications'
import { PermissionsAndroid } from 'react-native'

export const schedulePushNotification = async () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' }
    },
    trigger: null
  })
}

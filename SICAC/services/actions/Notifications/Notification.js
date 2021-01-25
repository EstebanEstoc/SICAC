import * as Notifications from 'expo-notifications'

export const schedulePushNotification = async (title, subject) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })

  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: subject
    },
    trigger: null
  })
}

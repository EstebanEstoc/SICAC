import * as Notifications from 'expo-notifications'

export const schedulePushNotification = async (title, subject) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })
  console.log(subject)
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: subject
    },
    trigger: null
  })
}

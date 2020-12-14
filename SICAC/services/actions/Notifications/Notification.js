import * as Notifications from 'expo-notifications'
import * as Permissions from "expo-permissions"
import Constants from 'expo-constants';




export const schedulePushNotification = async () => {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
        },
        trigger: null,
    });
};






export const askPermissions = async () => {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
        console.log('Notification permissions granted.')
    }
};





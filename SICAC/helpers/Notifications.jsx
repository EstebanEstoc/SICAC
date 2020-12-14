
import React from "react";
import styles from "./styles";
import {configureNotifications, schedulePushNotification, askPermissions} from "services/actions/Notifications/Notification"


const Notifications = () => {
    
    return (
        <View style={styles.container}>
          <Button onPress={schedulePushNotification} title="Notifications"></Button>
        </View>
      );

}

export default Notifications;



// useEffect(() => {
//     GoogleConfigure();

    // const askPermissions = async () => {
    //   let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    //   if (Constants.isDevice && result.status === 'granted') {
    //     console.log('Notification permissions granted.')
    //   }
    // };
    // askPermissions();

// }, []);





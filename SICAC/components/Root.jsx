import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Authentication from "./Authentication/Authentication";
import HomeScreen from "../helpers/HomeScreen";
import CreateScenario from "./CreateScenario/CreateScenarioTabs";

import SunriseSunsetAPI from "../helpers/SunriseSunsetAPI";
import ScenarioList from "./ScenarioList/ScenarioList";
import ConditionType from "./ConditionType";
import ActionType from "./ActionType";
import Actions from "./NewScenario/Actions/Actions";
import Conditions from "./NewScenario/Conditions/Conditions";
import Summary from "./NewScenario/Summary/Summary";
import Notifications from "../helpers/Notifications";
import MailAction from "./Actions/MailAction";
import SMSAction from "./Actions/SMSAction";
import NotificationAction from "./Actions/NotificationAction";

import TimeOfDayCondition from "./Conditions/TimeOfDayCondition";
import HomeCondition from "./Conditions/HomeCondition";
import LocationCondition from "./Conditions/LocationCondition";
import WifiAction from "./Actions/WifiAction";
import BluetoothAction from "./Actions/BluetoothAction";

const Stack = createStackNavigator();

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles.header}>
        {isAuth ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Authentication" component={Authentication} />
        )}
        <Stack.Screen name="SunriseSunsetAPI" component={SunriseSunsetAPI} />
        <Stack.Screen
          name="MailAction"
          options={styles.headerMailAction}
          component={MailAction}
        />
        <Stack.Screen
          name="SMSAction"
          options={styles.headerSMSAction}
          component={SMSAction}
        />
        <Stack.Screen
          name="NotificationAction"
          options={styles.headerNotificationAction}
          component={NotificationAction}
        />
        <Stack.Screen name="ScenarioList" component={ScenarioList} />
        <Stack.Screen name="ConditionType" component={ConditionType} />
        <Stack.Screen name="ActionType" component={ActionType} />
        <Stack.Screen name="New scenario - Conditions" component={Conditions} />
        <Stack.Screen name="New scenario - Actions" component={Actions} />
        <Stack.Screen name="New scenario - Summary" component={Summary} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="CreateScenario" component={CreateScenario} />
        <Stack.Screen name="TimeOfDayCondition" component={TimeOfDayCondition} />
        <Stack.Screen name="HomeCondition" component={HomeCondition} />
        <Stack.Screen name="LocationCondition" component={LocationCondition} />
        <Stack.Screen name="WifiAction" component={WifiAction} />
        <Stack.Screen name="BluetoothAction" component={BluetoothAction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  header: {
    headerStyle: {
      backgroundColor: "#093E60",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  headerMailAction: {
    headerStyle: {
      backgroundColor: "#4F465A",
      elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  headerSMSAction: {
    headerStyle: {
      backgroundColor: "#66BB6A",
      elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  headerNotificationAction: {
    headerStyle: {
      backgroundColor: "#00BAC5",
      elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
};

export default Root;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";

import { View, StyleSheet, Alert, Button } from "react-native";

import Authentication from "./Authentication/Authentication";
import HomeScreen from "../helpers/HomeScreen";
import Home from "./Home";
import CreateScenario from "./CreateScenario/CreateScenarioTabs";
import ExampleScenarios from "./ExampleScenarios";

import SunriseSunsetAPI from "../helpers/SunriseSunsetAPI";
import ScenarioList from "./ScenarioList/ScenarioList";
import ConditionType from "./ConditionType";
import ActionType from "./ActionType";
import Actions from "./NewScenario/Actions/Actions";
import Conditions from "./NewScenario/Conditions/Conditions";
import Summary from "./NewScenario/Summary/Summary";
import Notifications from "../helpers/Notifications";
import Form from "../helpers/Form";
import AddScenario from "../helpers/AddScenario";
import MailAction from "./Actions/MailAction";
import SMSAction from "./Actions/SMSAction";
import NotificationAction from "./Actions/NotificationAction";
import Bluetooth from "./Conditions/Bluetooth/Bluetooth";
import LightsAction from "./Actions/LightsAction";

import TimeOfDayCondition from "./Conditions/TimeOfDayCondition";
import HomeCondition from "./Conditions/HomeCondition";
import LocationCondition from "./Conditions/LocationCondition";
import HighHeartRateCondition from "./Conditions/HighHeartRateCondition";
import HaveToTakePillsCondition from "./Conditions/Calendar/HaveToTakePillsCondition";
import HaveToWalkCondition from "./Conditions/Calendar/HaveToWalkCondition";
import HaveToAnswerFormCondition from "./Conditions/Calendar/HaveToAnswerFormCondition";
import HaveAnAppointmentCondition from "./Conditions/Calendar/HaveAnAppointmentCondition";
import ConnectedToHeadphonesCondition from "./Conditions/Bluetooth/ConnectedToHeadphonesCondition";
import ConnectedToSpeakerCondition from "./Conditions/Bluetooth/ConnectedToSpeakerCondition";
import WifiAction from "./Actions/WifiAction";
import BluetoothAction from "./Actions/BluetoothAction";
import FormAction from "./Actions/FormAction";
import ShuttersAction from "./Actions/ShuttersAction";
import LaunchMusicAction from "./Actions/LaunchMusicAction";
import TriggerPedometerAction from "./Actions/TriggerPedometerAction";
import Calendar from "../helpers/Calendar";
import Sms from "../helpers/SMS";

import { ChangeFormActionStatus } from "../services/actions/Form/Form";



const Stack = createStackNavigator();

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);
  const scenarios = useSelector((state) => state.scenarios);
  const dispatch = useDispatch();
  

  return (
    
    <NavigationContainer>
      {scenarios.scenarios.map(
        (scenario) => scenario.actions.map(
          
          (data) => data.status === 1 ? Alert.alert(data.question, '', [
            { text: "Oui", onPress: () => ChangeFormActionStatus({id: scenario.id, value: 0, dispatch}) },
            { text: "Non", onPress: () => ChangeFormActionStatus({id: scenario.id, value: 0, dispatch}) }
            ],
            { cancelable: true }) : null ) )
        
      }
        
      <Stack.Navigator screenOptions={styles.header}>
        {isAuth ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Authentication" component={Authentication} />
        )}
        <Stack.Screen name="HomeHelper" component={HomeScreen} />
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
        <Stack.Screen name="AddScenario" component={AddScenario} />
        <Stack.Screen name="CreateScenario" component={CreateScenario} />
        <Stack.Screen
          name="TimeOfDayCondition"
          component={TimeOfDayCondition}
        />
        <Stack.Screen name="HomeCondition" component={HomeCondition} />
        <Stack.Screen name="LocationCondition" component={LocationCondition} />
        <Stack.Screen name="HighHeartRateCondition" component={HighHeartRateCondition} />
        <Stack.Screen name="HaveToTakePillsCondition" component={HaveToTakePillsCondition} />
        <Stack.Screen name="HaveToWalkCondition" component={HaveToWalkCondition} />
        <Stack.Screen name="HaveToAnswerFormCondition" component={HaveToAnswerFormCondition} />
        <Stack.Screen name="HaveAnAppointmentCondition" component={HaveAnAppointmentCondition} />
        <Stack.Screen name="ConnectedToHeadphonesCondition" component={ConnectedToHeadphonesCondition} />
        <Stack.Screen name="ConnectedToSpeakerCondition" component={ConnectedToSpeakerCondition} />
        <Stack.Screen name="WifiAction" component={WifiAction} />
        <Stack.Screen name="FormAction" component={FormAction} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="BluetoothAction" component={BluetoothAction} />
        <Stack.Screen name="Bluetooth" component={Bluetooth} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="ExampleScenarios" component={ExampleScenarios} />
        <Stack.Screen name="LightsAction" component={LightsAction} />
        <Stack.Screen name="ShuttersAction" component={ShuttersAction} />
        <Stack.Screen name="LaunchMusicAction" component={LaunchMusicAction} />
        <Stack.Screen name="TriggerPedometerAction" component={TriggerPedometerAction} />
        <Stack.Screen name="SMS" component={Sms} />
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

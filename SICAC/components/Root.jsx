import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";

import { Alert } from "react-native";

import Authentication from "./Authentication/Authentication";
import HomeScreen from "../helpers/HomeScreen";
import Home from "./Home";
import CreateScenario from "./CreateScenario/CreateScenarioTabs";
import Profile from "./Profile";
import ExampleScenarios from "./ExampleScenarios";
import Help from "./Help";

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
import FormSimpleAction from "./Actions/FormSimpleAction";
import ShuttersAction from "./Actions/ShuttersAction";
import LaunchMusicAction from "./Actions/LaunchMusicAction";
import TriggerPedometerAction from "./Actions/TriggerPedometerAction";
import Calendar from "../helpers/Calendar";
import Sms from "../helpers/SMS";
import Wizard from "./Wizard";
import BackgroundJob from "react-native-background-job";
//import BackTest from "../helpers/background";

import { ChangeFormActionStatus } from "../services/actions/Form/Form";
import * as SMS from "../services/actions/SMS/SMS";
import script from "../services/scripts/verificationScript";

BackgroundJob.register({
  jobKey: "verificationScript",
  job: () => {
    try {
      script();
    } catch (error) {
      console.log(error);
    }
  },
});

const Stack = createStackNavigator();

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);
  const isFirstLaunch = useSelector((state) => state.configuration.wizardState);
  const scenarios = useSelector((state) => state.scenarios);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    BackgroundJob.schedule({
      jobKey: "verificationScript",
      period: 1000,
      allowExecutionInForeground: true,
    });
  }, []);

  return (
    <NavigationContainer>
      {scenarios.scenarios.map((scenario) =>
        scenario.actions.map((data) =>
          data.status === 1
            ? Alert.alert(
                data.question,
                "",
                [
                  {
                    text: "Oui",
                    onPress: () => {
                      ChangeFormActionStatus({
                        id: scenario.id,
                        value: 0,
                        dispatch,
                      });
                      if (data["receivers"] !== undefined) {
                        data.receivers.map((infos) =>
                          SMS.sendSMS(
                            infos.phone,
                            userInfo.user.name +
                              " a répondu au formulaire " +
                              data.question +
                              " avec la réponse suivante: Oui"
                          )
                        );
                      }
                    },
                  },
                  {
                    text: "Non",
                    onPress: () => {
                      ChangeFormActionStatus({
                        id: scenario.id,
                        value: 0,
                        dispatch,
                      });
                      if (data["receivers"] !== undefined) {
                        data.receivers.map((infos) =>
                          SMS.sendSMS(
                            infos.phone,
                            userInfo.user.name +
                              " a répondu au formulaire " +
                              data.question +
                              " avec la réponse suivante: Non"
                          )
                        );
                      }
                    },
                  },
                ],
                { cancelable: false }
              )
            : null
        )
      )}

      <Stack.Navigator screenOptions={styles.header}>
        {isFirstLaunch && isAuth ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                title: "Home",
              }}
              component={Home}
            />
            <Stack.Screen name="HomeHelper" component={HomeScreen} />
            <Stack.Screen
              name="SunriseSunsetAPI"
              component={SunriseSunsetAPI}
            />
            <Stack.Screen
              name="MailAction"
              options={(styles.headerMailAction, { title: "Action - Mail" })}
              component={MailAction}
            />
            <Stack.Screen
              name="SMSAction"
              options={(styles.headerSMSAction, { title: "Action - SMS" })}
              component={SMSAction}
            />
            <Stack.Screen
              name="NotificationAction"
              options={
                (styles.headerNotificationAction,
                { title: "Action - Notification" })
              }
              component={NotificationAction}
            />
            <Stack.Screen
              name="ScenarioList"
              options={{
                title: "My scenarios",
              }}
              component={ScenarioList}
            />
            <Stack.Screen
              name="ConditionType"
              options={{
                title: "Add a condition",
              }}
              component={ConditionType}
            />
            <Stack.Screen
              name="ActionType"
              options={{
                title: "Add an action",
              }}
              component={ActionType}
            />
            <Stack.Screen
              name="New scenario - Conditions"
              component={Conditions}
            />
            <Stack.Screen name="New scenario - Actions" component={Actions} />
            <Stack.Screen name="New scenario - Summary" component={Summary} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="AddScenario" component={AddScenario} />
            {/*<Stack.Screen name="BackTest" component={BackTest} />*/}
            <Stack.Screen
              name="CreateScenario"
              options={{
                title: "Create a scenario",
              }}
              component={CreateScenario}
            />
            <Stack.Screen
              name="TimeOfDayCondition"
              options={{
                title: "Condition - Time of day",
              }}
              component={TimeOfDayCondition}
            />
            <Stack.Screen
              name="HomeCondition"
              options={{
                title: "Condition - Home",
              }}
              component={HomeCondition}
            />
            <Stack.Screen
              name="LocationCondition"
              options={{
                title: "Condition - Location",
              }}
              component={LocationCondition}
            />
            <Stack.Screen
              name="HighHeartRateCondition"
              options={{
                title: "Condition - High heart rate",
              }}
              component={HighHeartRateCondition}
            />
            <Stack.Screen
              name="HaveToTakePillsCondition"
              options={{
                title: "Condition - Have to take pills",
              }}
              component={HaveToTakePillsCondition}
            />
            <Stack.Screen
              name="HaveToWalkCondition"
              options={{
                title: "Condition - Have to walk",
              }}
              component={HaveToWalkCondition}
            />
            <Stack.Screen
              name="HaveToAnswerFormCondition"
              options={{
                title: "Condition - Have to answer form",
              }}
              component={HaveToAnswerFormCondition}
            />
            <Stack.Screen
              name="HaveAnAppointmentCondition"
              options={{
                title: "Condition - Have an appointment",
              }}
              component={HaveAnAppointmentCondition}
            />
            <Stack.Screen
              name="ConnectedToHeadphonesCondition"
              options={{
                title: "Condition - Connected to headphones",
              }}
              component={ConnectedToHeadphonesCondition}
            />
            <Stack.Screen
              name="ConnectedToSpeakerCondition"
              options={{
                title: "Condition - Connected to speaker",
              }}
              component={ConnectedToSpeakerCondition}
            />
            <Stack.Screen name="WifiAction" component={WifiAction} />
            <Stack.Screen name="FormAction" component={FormAction} />
            <Stack.Screen
              name="FormSimpleAction"
              component={FormSimpleAction}
            />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="BluetoothAction" component={BluetoothAction} />
            <Stack.Screen name="Bluetooth" component={Bluetooth} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen
              name="ExampleScenarios"
              options={{
                title: "Example scenarios",
              }}
              component={ExampleScenarios}
            />
            <Stack.Screen
          name="Profile"
          options={{
            title: "My profile",
          }}
          component={Profile}
        /> 
            <Stack.Screen
              name="LightsAction"
              options={{
                title: "Action - Lights",
              }}
              component={LightsAction}
            />
            <Stack.Screen
              name="ShuttersAction"
              options={{
                title: "Action - Shutters",
              }}
              component={ShuttersAction}
            />
            <Stack.Screen
              name="LaunchMusicAction"
              options={{
                title: "Action - Launch music",
              }}
              component={LaunchMusicAction}
            />
            <Stack.Screen
              name="TriggerPedometerAction"
              options={{
                title: "Action - Trigger the pedometer",
              }}
              component={TriggerPedometerAction}
            />
            <Stack.Screen name="SMS" component={Sms} />
          </>
        ) : (
          <Stack.Screen name="Wizard" component={Wizard} />
        )}
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

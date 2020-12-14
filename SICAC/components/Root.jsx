
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
import Actions from "./NewScenario/Actions/Actions";
import Conditions from "./Conditions/Conditions";
import Summary from "./NewScenario/Summary/Summary";
import Notifications from "../helpers/Notifications"




const Stack = createStackNavigator();

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isAuth ? (
          <Stack.Screen name="Home" component={CreateScenario} />
        ) : (
            <Stack.Screen name="Authentication" component={Authentication} />
          )}
        <Stack.Screen name="SunriseSunsetAPI" component={SunriseSunsetAPI} />
        <Stack.Screen name="ScenarioList" component={ScenarioList} />
        <Stack.Screen name="ConditionType" component={ConditionType} />
        <Stack.Screen name="New scenario - Actions" component={Actions} />
        <Stack.Screen name="New scenario - Summary" component={Summary} />
        <Stack.Screen name="Conditions" component={Conditions} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default Root;

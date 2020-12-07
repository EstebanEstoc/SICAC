import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Authentication from "./Authentication/Authentication";
import HomeScreen from "./HomeScreen";
import CreateScenarioLayer from "./CreateScenario/CreateScenarioLayer";

import SunriseSunsetAPI from "../helpers/SunriseSunsetAPI";
import ScenarioList from "./ScenarioList/ScenarioList";

const Stack = createStackNavigator();

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isAuth ? (
          <Stack.Screen name="Home" component={CreateScenarioLayer} />
        ) : (
          <Stack.Screen name="Authentication" component={Authentication} />
        )}
        <Stack.Screen name="SunriseSunsetAPI" component={SunriseSunsetAPI} />
        <Stack.Screen name="ScenarioList" component={ScenarioList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

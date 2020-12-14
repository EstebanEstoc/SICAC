import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Resume from "../NewScenario/Summary/Summary";
import Actions from "../NewScenario/Actions/Actions";
import Conditions from "../Conditions/Conditions";

const Tab = createMaterialTopTabNavigator();

const CreateScenarioTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      tabBarPosition="bottom"
      tabBarOptions={tabsOptions}
    >
      <Tab.Screen name="Conditions" component={Conditions} />
      <Tab.Screen name="Actions" component={Actions} />
      <Tab.Screen name="Resume" component={Resume} />
    </Tab.Navigator>
  );
};

const tabsOptions = {
  labelStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  activeTintColor: "#093E60",
  inactiveTintColor: "#CACBCC",
  indicatorStyle: {
    backgroundColor: "#093E60",
    height: 7,
  },
};

export default CreateScenarioTabs;

import React, { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet, Alert } from "react-native";
import { IconButton, Colors } from "react-native-paper";

import {
  addAction,
  addCondition,
  clear,
  addName
} from "../../reducers/scenarios/createScenarioSlice";

import Resume from "../NewScenario/Summary/Summary";
import Actions from "../NewScenario/Actions/Actions";
import Conditions from "../NewScenario/Conditions/Conditions";

const Tab = createMaterialTopTabNavigator();

const CreateScenarioTabs = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const scenarios = useSelector((state) => state.scenarios);
  const  itemId  = route.params ? route.params.itemId : -1;




  useEffect(() => {
    if(itemId !== -1){
      const SelectedScenario = scenarios.scenarios.find(item => item.id === Number(JSON.stringify(itemId)))
      console.log(SelectedScenario)
      dispatch(addName(SelectedScenario.name));
      SelectedScenario.actions.map(action => dispatch(addAction(action)));
      SelectedScenario.conditions.map(condition => dispatch(addCondition(condition)));
    }
  }, []);






  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.icon}>
          <IconButton
            icon="close"
            animated={true}
            size={28}
            color="#ffff"
            onPress={() => {
              Alert.alert(
                "Quit editing scenario",
                "Would you like to save your scenario as draft ?",
                [
                  {
                    text: "Yes",
                    onPress: () => {
                      navigation.goBack();
                      dispatch(clear());
                    },
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "No",
                    onPress: () => {
                      navigation.goBack();
                      dispatch(clear());
                    },
                  },
                  { cancelable: false },
                ]
              );
            }}
          />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      backBehavior="history"
      tabBarPosition="bottom"
      tabBarOptions={tabsOptions}
    >
      <Tab.Screen name="Conditions" component={Conditions} />
      <Tab.Screen name="Actions" component={Actions} />
      <Tab.Screen name="Resume" component={Resume} initialParams={{ itemId: itemId }} />
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

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default CreateScenarioTabs;

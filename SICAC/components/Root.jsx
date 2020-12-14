import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Authentication from "./Authentication";
import { signOut } from "../services/authentication/providers/GoogleSignIn";
import { toggleAuthFalse } from "../Reducer/Authentication/authenticationSlice";
import { clearUserInfo } from "../Reducer/Authentication/userSlice";
import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";

import SunriseSunsetAPI from "../helpers/SunriseSunsetAPI";
import ScenarioList from "./ScenarioList/ScenarioList";
import ConditionType from "./ConditionType";
import Actions from "./Actions/Actions";

import * as Notifications from 'expo-notifications'
import * as Permissions from "expo-permissions"
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});





const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {


  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    GoogleConfigure();

    // const askPermissions = async () => {
    //   let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    //   if (Constants.isDevice && result.status === 'granted') {
    //     console.log('Notification permissions granted.')
    //   }
    // };
    // askPermissions();

  }, []);

  const _signOut = async () => {
    await signOut();
    dispatch(toggleAuthFalse());
    dispatch(clearUserInfo());
  };


  schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: null,
    });
  };




  return (
    <View style={styles.container}>
      <Text>Welcome {userInfo && userInfo.user && userInfo.user.name}</Text>
      <StatusBar style="auto" />
      <Button onPress={_signOut} title="Sign Out"></Button>

      <Button title="API sunrise/sunset infos"
        onPress={() => navigation.navigate('SunriseSunsetAPI')} />
      <Button title="Scenario List"
        onPress={() => navigation.navigate('ScenarioList')} />
      <Button title="Condition Type"
        onPress={() => navigation.navigate("ConditionType")}
      />
      <Button title="New scenario"
        onPress={() => navigation.navigate('New scenario')} />

      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
};

const Root = () => {
  const isAuth = useSelector((state) => state.authentication);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
            <Stack.Screen name="Authentication" component={Authentication} />
          )}
        <Stack.Screen name="SunriseSunsetAPI" component={SunriseSunsetAPI} />
        <Stack.Screen name="ScenarioList" component={ScenarioList} />
        <Stack.Screen name="ConditionType" component={ConditionType} />
        <Stack.Screen name="New scenario" component={Actions} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Root;

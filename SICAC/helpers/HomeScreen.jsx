import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { signOut } from "../services/authentication/providers/GoogleSignIn";
import { toggleAuthFalse } from "../reducers/authentication/authenticationSlice";
import { clearUserInfo } from "../reducers/authentication/userSlice";
import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";
import styles from "./styles";
import { persistor } from "../store/store";
import {
  GetPrimaryCalendarID,
  GetCalendarsNameList,
  GetEventsTitleList,
  SearchEventsByTitle,
  GetEventDates,
  GetEventDuration,
} from "../services/conditions/calendar/providers/GoogleCalendarRepository";

const HomeScreen = ({ navigation }) => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleConfigure();
  }, []);

  const _signOut = async () => {
    await signOut();
    dispatch(toggleAuthFalse());
    dispatch(clearUserInfo());
  };

  const test = async () => {
    const primary = await GetPrimaryCalendarID();
    console.log(primary);
    console.log(await GetCalendarsNameList());
    console.log(await GetEventsTitleList(primary));
    console.log(await SearchEventsByTitle(primary, "coiffeur"));
    console.log(await GetEventDates("pjau304s0ih55ddbfbb13as7qo", primary));
    console.log(await GetEventDuration("pjau304s0ih55ddbfbb13as7qo", primary));
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {userInfo && userInfo.user && userInfo.user.name}</Text>
      <StatusBar style="auto" />
      <Button onPress={_signOut} title="Sign Out"></Button>
      <Button
        title="API sunrise/sunset infos"
        onPress={() => navigation.navigate("SunriseSunsetAPI")}
      />
      <Button
        title="Scenario List"
        onPress={() => navigation.navigate("ScenarioList")}
      />
      <Button
        title="New scenario"
        onPress={() => navigation.navigate("CreateScenario")}
      />
      <Button
        title="Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Reset Store" onPress={() => persistor.purge()} />
      <Button title="Calendar" onPress={test} />
    </View>
  );
};

export default HomeScreen;

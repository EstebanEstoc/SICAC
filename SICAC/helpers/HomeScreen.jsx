import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { signOut } from "../services/authentication/providers/GoogleSignIn";
import { toggleAuthFalse } from "../reducers/authentication/authenticationSlice";
import { clearUserInfo } from "../reducers/authentication/userSlice";
import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";
import styles from "./styles";
import { persistor } from "../Store/store";

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
      <Button
        title="Add scenario"
        onPress={() => navigation.navigate("AddScenario")}
      />
      <Button title="Reset Store" onPress={() => persistor.purge()} />
      <Button
        title="Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
      <Button title="SMS" onPress={() => navigation.navigate("SMS")} />
      <Button
        title="CalendarSelector"
        onPress={() => navigation.navigate("CalendarSelector")}
      />
    </View>
  );
};

export default HomeScreen;

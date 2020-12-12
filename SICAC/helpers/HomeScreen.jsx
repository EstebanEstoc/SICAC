import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { signOut } from "../services/authentication/providers/GoogleSignIn";
import { toggleAuthFalse } from "../reducers/authentication/authenticationSlice";
import { clearUserInfo } from "../reducers/authentication/userSlice";
import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";
import styles from "./styles";

const HomeScreen = () => {
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
    </View>
  );
};

export default HomeScreen;

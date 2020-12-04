import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { GoogleSigninButton } from "react-native-google-signin";
import { useSelector, useDispatch } from "react-redux";
import {
  signIn,
  signOut,
  signInSilently,
  GoogleConfigure,
} from "../services/authentication/providers/GoogleSignIn";
import { toggleAuth } from "../Reducer/Authentication/authenticationSlice";

const Authentication = (props) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.authentication);
  console.log(isAuth);

  useEffect(() => {
    GoogleConfigure();
  }, []);

  const _signIn = async () => {
    try {
      const userInfo = await signIn();
      dispatch(toggleAuth());
    } catch (error) {
      console.log(error.message);
    }
  };

  const _signOut = async () => {
    const isLoggedIn = await signOut();
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
      />
    </View>
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

export default Authentication;

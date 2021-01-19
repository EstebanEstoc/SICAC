import React, { useEffect } from "react";
import { GoogleSigninButton } from "react-native-google-signin";
import { useDispatch } from "react-redux";
import { View, StyleSheet, Alert } from "react-native";

import * as GoogleCalendarAPI from '../../services/conditions/calendar/providers/GoogleCalendarAPI'


import { GoogleConfigure } from "../../services/authentication/providers/GoogleSignIn";
import { toggleAuthTrue } from "../../reducers/authentication/authenticationSlice";
import { signInGoogleAPI } from "../../reducers/authentication/userSlice";

const Authentication = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleConfigure();
  }, []);

  const _signIn = async () => {
    dispatch(signInGoogleAPI())
      .then(()=> GoogleCalendarAPI.GoogleCalendarConfig())
      .then(() => dispatch(toggleAuthTrue()))
      .catch((error) => Alert.alert(error.message));
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 70 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Authentication;

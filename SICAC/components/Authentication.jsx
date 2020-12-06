import React, { useEffect } from "react";
import { GoogleSigninButton } from "react-native-google-signin";
import { useDispatch } from "react-redux";
import { View, StyleSheet, Alert } from "react-native";

import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";
import { toggleAuthTrue } from "../Reducer/Authentication/authenticationSlice";
import { signInGoogleAPI } from "../Reducer/Authentication/userSlice";

const Authentication = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleConfigure();
  }, []);

  const _signIn = async () => {
    dispatch(signInGoogleAPI())
      .then(() => dispatch(toggleAuthTrue()))
      .catch((error) => Alert.alert(error.message));
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

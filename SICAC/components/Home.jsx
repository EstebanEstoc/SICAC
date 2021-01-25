import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { GoogleConfigure } from "../services/authentication/providers/GoogleSignIn";
import { GoogleCalendarConfig } from "../services/conditions/calendar/providers/GoogleCalendarAPI";

const Home = ({ navigation }) => {
  useEffect(() => {
    GoogleConfigure();
    GoogleCalendarConfig();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateScenario");
        }}
        style={styles.button}
      >
        <Icon name="plus" size={30} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Create a new scenario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ScenarioList");
        }}
        style={styles.button}
      >
        <Icon name="list" size={30} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>My scenarios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("");
        }}
        style={styles.button}
      >
        <Icon name="user" size={30} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>My profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ExampleScenarios");
        }}
        style={styles.button}
      >
        <Icon
          name="bookmark"
          size={30}
          color="white"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Example scenarios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Help");
        }}
        style={styles.button}
      >
        <Icon
          name="info-circle"
          size={30}
          color="white"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeHelper");
        }}
        style={styles.button}
      >
        <Icon name="home" size={30} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Debug button (demo)</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const mainColor = "#00BAC5";
const secondaryColor = "#008e96";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonIcon: {
    marginRight: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    margin: 12,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowColor: mainColor,
    borderColor: secondaryColor,
    borderWidth: 2,
    backgroundColor: mainColor,
  },
});

export default Home;

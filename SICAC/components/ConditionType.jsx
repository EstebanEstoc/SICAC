import React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-elements";

const ConditionType = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.flexContainer}>
        <Button
          title="Home"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "home", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          title="Location"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "place", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <View style={styles.flexContainer}>
        <Button
          title="Calendar"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "today", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          title="Duration"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "schedule", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <View style={styles.flexContainer}>
        <Button
          title="Bluetooth"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "bluetooth", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          title="Time"
          titleStyle={{ color: "black" }}
          type="outline"
          icon={{ name: "flare", size: 40 }}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerMain: {
    marginTop: 50,
    width: "100%",
    height: "100%",
  },
  containerText: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: 90,
    height: 90,
    flexDirection: "column",
    borderRadius: 20,
  },
});

export default ConditionType;

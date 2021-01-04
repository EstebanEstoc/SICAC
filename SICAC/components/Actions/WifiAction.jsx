import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../../helpers/Buttons";

const WifiAction = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);

  return (
    <View style={styles.container}>
      <ConditionButton title="Activate wifi" size="sm" icon={{ name: "wifi" }}
        onPress={() => navigation.navigate("CreateScenario")} />
      <ConditionButton title="Deactivate wifi" size="sm" icon={{ name: "times-circle-o" }}
        onPress={() => navigation.navigate("CreateScenario")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  }
});

export default WifiAction;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../Buttons";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";

const LightsAction = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ConditionButton
        title="Turn on lights"
        size="sm"
        icon={{ name: "lightbulb-o" }}
        onPress={() => {
          dispatch(addAction({ type: "LightOn", name: "Turn on the lights" }));
          navigation.navigate("CreateScenario");
        }}
      />
      <ConditionButton
        title="Turn off lights"
        size="sm"
        icon={{ name: "power-off" }}
        onPress={() => {
          dispatch(
            addAction({ type: "LightOff", name: "Turn off the lights" })
          );
          navigation.navigate("CreateScenario");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default LightsAction;

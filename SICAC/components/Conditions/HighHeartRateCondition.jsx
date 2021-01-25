import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { ConditionButton } from "../Buttons";
import { addCondition } from "../../reducers/scenarios/createScenarioSlice";

const HighHeartRateCondition = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const heartRate = useSelector(
    (state) => state.configuration.cardiacThreshold
  );
  const dispatch = useDispatch(); // TO REPLACE with the value in store (given in wizard)

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        This condition is linked to your connected watch.
      </Text>
      <ConditionButton
        title={"Heart rate superior to your threshold (" + heartRate + " BPM)"}
        size="sm"
        icon={{ name: "heartbeat" }}
        onPress={() => {
          dispatch(
            addCondition({
              type: "HeartRate",
              name: "High heart rate (> " + heartRate + " BPM)",
            })
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
  mainText: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 35,
  },
});

export default HighHeartRateCondition;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../Buttons";
import { addCondition } from "../../reducers/scenarios/createScenarioSlice";

const HomeCondition = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ConditionButton
        title="At home"
        size="sm"
        icon={{ name: "home" }}
        onPress={() => {
          dispatch(addCondition({ type: "AtHome", name: "At home" }));
          navigation.navigate("CreateScenario");
        }}
      />
      <ConditionButton
        title="Away from home"
        size="sm"
        icon={{ name: "plane" }}
        onPress={() => {
          dispatch(addCondition({ type: "AwayHome", name: "Away from home" }));
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

export default HomeCondition;

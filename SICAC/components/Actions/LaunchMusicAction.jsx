import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../Buttons";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";

const LaunchMusicAction = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ConditionButton
        title="Launch music"
        size="sm"
        icon={{ name: "music" }}
        onPress={() => {
          dispatch(addAction({ type: "LaunchMusic", name: "Launch music" }));
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

export default LaunchMusicAction;

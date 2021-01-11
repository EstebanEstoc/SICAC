import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../Buttons";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";


const ShuttersAction = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ConditionButton title="Open the shutters" size="sm" icon={{ name: "arrow-up" }}
        onPress={() => {
            dispatch(addAction({ name: "Open the shutters" }));
            navigation.navigate("CreateScenario");
          }} />
      <ConditionButton title="Close the shutters" size="sm" icon={{ name: "arrow-down" }}
        onPress={() => {
            dispatch(addAction({ name: "Close the shutters" }));
            navigation.navigate("CreateScenario");
          }} />
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

export default ShuttersAction;
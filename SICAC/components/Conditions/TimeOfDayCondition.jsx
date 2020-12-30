import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../../helpers/Buttons";
import { addCondition } from "../../reducers/scenarios/createScenarioSlice";

const TimeOfDayCondition = ({ navigation }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();
  const ref = React.useRef();

  return (
    <View style={styles.container}>
      <ConditionButton title="Daytime" size="sm" icon={{ name: "sun-o" }}
        onPress={() => {
          dispatch(addCondition({ name: "Daytime" }));
          navigation.navigate("CreateScenario");
        }} />
      <ConditionButton title="Nighttime" size="sm" icon={{ name: "moon-o" }}
        onPress={() => {
          dispatch(addCondition({ name: "Nighttime" }));
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

export default TimeOfDayCondition;
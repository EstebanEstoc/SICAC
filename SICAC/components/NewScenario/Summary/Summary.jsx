import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Card, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SummaryStyles";
import { addName, clear } from "../../../reducers/scenarios/createScenarioSlice";
import { addScenario, modifyScenario } from "../../../reducers/scenarios/scenariosSlice";

export default function Summary({ route, navigation }) {
  const dispatch = useDispatch();
  const scenario = useSelector((state) => state.createScenario);
  const scenarios = useSelector((state) => state.scenarios);

  try {
    var { itemId } = route.params;
    var id = JSON.stringify(itemId);
  } catch (e) {
    console.log(e)
  }

  return (
    <View style={styles.container}>
      <ScrollView containerStyle={styles.scrollView}>
        <View style={styles.name}>
          {
          /* <Text>Scenario Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={scenarioName => onChangeScenarioName(scenarioName)}
            value={scenarioName}
          /> */}
          <Input
            label="Scenario name"
            placeholder="Tap to enter the scenario name"
            // onChangeText={text => onChangeText(text)}
            leftIcon={{
              type: "font-awesome-5",
              name: "pen-fancy",
              size: 18,
            }}
            style={styles.textInput2}
            defaultValue={scenario.name}
            onChangeText={(scenarioName) => dispatch(addName(scenarioName))}
            
            // onChangeText={(scenarioName) => dispatch(modifyScenario({name: scenarioName}, Number(id)))}
          />
        </View>

        <View style={styles.scenario}>
          <View style={styles.itemList}>
            {scenario.conditions &&
              scenario.conditions.map((scenario, index) => {
                return (
                  <Card
                    key={index}
                    containerStyle={[styles.card, styles.cardCondition]}
                  >
                    <Text style={styles.cardText}>{scenario.name}</Text>
                  </Card>
                );
              })}
          </View>
          <Icon
            containerStyle={styles.arrow}
            name="long-arrow-alt-down"
            size={50}
            type="font-awesome-5"
          />
          <View style={styles.itemList}>
            {scenario.actions &&
              scenario.actions.map((scenario, index) => {
                return (
                  <Card
                    key={index}
                    containerStyle={[styles.card, styles.cardAction]}
                  >
                    <Text style={styles.cardText}>{scenario.name}</Text>
                  </Card>
                );
              })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.floatingButton}>
        <TouchableOpacity
          onPress={() => {
            id != -1 ? dispatch(modifyScenario({values: scenario, id: Number(id)})) : dispatch(addScenario(scenario));
            dispatch(clear());
            navigation.navigate("ScenarioList");
          }}
          style={styles.newScenarioButton}
        >
          <Text style={styles.newScenarioButtonText}>{id != -1 ? "Modify" : "Create"} this scenario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

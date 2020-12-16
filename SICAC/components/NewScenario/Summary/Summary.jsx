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
import { addName } from "../../../reducers/scenarios/createScenarioSlice";

export default function Summary() {
  const dispatch = useDispatch();
  const scenario = useSelector((state) => state.createScenario);
  const ref = React.useRef();

  return (
    <View style={styles.container}>
      <ScrollView containerStyle={styles.scrollView}>
        <View style={styles.name}>
          {/* <Text>Scenario Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={scenarioName => onChangeScenarioName(scenarioName)}
            value={scenarioName}
          /> */}
          <Input
            label="Scenario name"
            placeholder="Tap to enter the scenario name"
            leftIcon={{
              type: "font-awesome-5",
              name: "pen-fancy",
              size: 18,
            }}
            style={styles.textInput2}
            value={scenario.name && scenario.name}
            onChangeText={(scenarioName) => dispatch(addName(scenarioName))}
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
          onPress={() => console.log("Create scenario")}
          style={styles.newScenarioButton}
        >
          <Text style={styles.newScenarioButtonText}>Create this scenario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

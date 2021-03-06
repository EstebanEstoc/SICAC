import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card, Icon } from "react-native-elements";
import { Transition, Transitioning } from "react-native-reanimated";
import styles, { mainColor, secondaryColor } from "./ConditionsStyles";
import { removeCondition } from "../../../reducers/scenarios/createScenarioSlice";



const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={200} />
  </Transition.Together>
);

const Title = ({ text }) => <Text style={styles.title}>{text}</Text>;

export default function Conditions({ navigation }) {

  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();
  const ref = React.useRef();

  return (
    <ScrollView containerStyle={styles.container}>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}
      >
        <Title text="Select your condition(s)" />
        <View style={styles.itemList}>
          {scenario.conditions &&
            scenario.conditions.map((scenario, index) => {
              return (
                <Card key={index} containerStyle={styles.card}>
                  <Text style={styles.cardText}>{scenario.name}</Text>
                  <Icon
                    containerStyle={{ alignSelf: "flex-end" }}
                    name="trash"
                    type="font-awesome"
                    onPress={() => {
                      ref.current.animateNextTransition();
                      dispatch(removeCondition((index)));
                    }}
                  />
                </Card>
              );
            })}
        </View>
        <View style={styles.addButtonSection}>
          <Text>|</Text>
          <Text>|</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ConditionType")}
          >
            <Icon
              containerStyle={styles.addButtonIcon}
              reverse
              size={35}
              name="plus"
              type="font-awesome"
              color={mainColor}
            />
            <Text style={styles.addButtonText}>Add a condition</Text>
          </TouchableOpacity>
        </View>
      </Transitioning.View>
    </ScrollView>
  );
}

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Transition, Transitioning } from "react-native-reanimated";
import styles, { mainColor, secondaryColor } from "./ActionsStyles";
import { removeAction } from "../../../reducers/scenarios/createScenarioSlice";

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={200} />
  </Transition.Together>
);

const Title = ({ text }) => <Text style={styles.title}>{text}</Text>;

export default function Actions({ navigation }) {
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
        <Title text="Select your action(s)" />
        <View style={styles.itemList}>
          {scenario.actions &&
            scenario.actions.map((scenario, index) => {
              return (
                <Card key={index} containerStyle={styles.card}>
                  <Text style={styles.cardText}>{scenario.name}</Text>
                  <Icon
                    containerStyle={{ alignSelf: "flex-end" }}
                    name="trash"
                    type="font-awesome"
                    onPress={() => {
                      ref.current.animateNextTransition();
                      dispatch(removeAction((index)));
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
            onPress={() => navigation.navigate("ActionType")}
          >
            <Icon
              containerStyle={styles.addButtonIcon}
              reverse
              size={35}
              name="plus"
              type="font-awesome"
              color={mainColor}
            />
            <Text style={styles.addButtonText}>Add an action</Text>
          </TouchableOpacity>
        </View>
      </Transitioning.View>
    </ScrollView>
  );
}

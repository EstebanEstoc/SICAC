import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { Transition, Transitioning } from "react-native-reanimated";
import styles, { mainColor, secondaryColor } from "./ActionsStyles";

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={200} />
  </Transition.Together>
);

const Title = ({ text }) => <Text style={styles.title}>{text}</Text>;

export default function Actions() {
  const scenario = useSelector((state) => state.createScenario);
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
          {scenario.then &&
            scenario.then.map((scenario, index) => {
              return (
                <Card key={index} containerStyle={styles.card}>
                  <Text style={styles.cardText}>{scenario.name}</Text>
                  <Icon
                    containerStyle={{ alignSelf: "flex-end" }}
                    name="trash"
                    type="font-awesome"
                    onPress={() => {
                      ref.current.animateNextTransition();
                      setCurrentScenarios((previousScenarios) =>
                        previousScenarios.filter((item, id) => index !== id)
                      );
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
            onPress={() => console.log("→ Redirect to new scenario page")}
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

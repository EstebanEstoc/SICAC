import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Chip } from "react-native-paper";

const ChipParam = ({ containerStyle, chipAction, chipActionCalendar }) => {
  const scenario = useSelector((state) => state.createScenario);
  const [selectedConditionChip, setselectedConditionChip] = useState([]);
  const conditionLenght = useRef(0);

  useEffect(() => {
    const chipArrayConditions = [];
    for (let i = 0; i < scenario.conditions.length; i++) {
      chipArrayConditions.push(false);
      conditionLenght.current++;
    }
    setselectedConditionChip(chipArrayConditions);
  }, []);

  const actionChips = () => {
    const chips = [];
    scenario.actions.forEach((action, index) => {
      let indexProp = 0;
      for (const property in action.options) {
        if (typeof action.options[property] !== "object") {
          chips.push(
            <View
              style={styles.chip}
              key={conditionLenght.current + index + indexProp}
            >
              <Chip
                style={{
                  backgroundColor: "#4F465A",
                }}
                textStyle={{
                  color: "#fff",
                }}
                onPress={() => chipAction(action.options[property])}
              >
                {property}
              </Chip>
            </View>
          );
        }
        indexProp++;
      }
    });
    return chips;
  };

  const toggleCalendarChip = (i) => {
    const newState = selectedConditionChip;
    newState[i] = !newState[i];
    setselectedConditionChip([...newState]);
  };

  const conditionChips = () => {
    const chips = [];
    scenario.conditions.forEach((condition, index) => {
      if (condition.name && condition.name.startsWith("Have")) {
        chips.push(
          <View style={styles.chip} key={index}>
            <Chip
              selected={selectedConditionChip[index]}
              style={{
                backgroundColor: "#4F465A",
              }}
              textStyle={{
                color: "#fff",
              }}
              onPress={() => {
                toggleCalendarChip(index);
                chipActionCalendar(
                  selectedConditionChip[index],
                  condition.name
                );
              }}
              selectedColor="white"
            >
              {condition.name}
            </Chip>
          </View>
        );
      } else {
        let indexProp = 0;
        for (const property in condition.options) {
          if (typeof condition.options[property] !== "object") {
            chips.push(
              <View style={styles.chip} key={index + indexProp}>
                <Chip
                  style={{
                    backgroundColor: "#4F465A",
                  }}
                  textStyle={{
                    color: "#fff",
                  }}
                  onPress={() => chipAction(condition.options[property])}
                >
                  {property}
                </Chip>
              </View>
            );
          }
          indexProp++;
        }
      }
    });
    return chips;
  };

  return (
    <View style={containerStyle}>
      <Text>
        Press the chip to add the content to the body. If it is calendar
        condition (starting by "Have"), it will be placed at the end of the
        body.
      </Text>
      <View style={styles.chipsContainer}>
        {actionChips()}
        {conditionChips()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    margin: 5,
  },
  chipsContainer: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
  },
});

export default ChipParam;

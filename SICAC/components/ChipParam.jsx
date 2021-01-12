import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Chip } from "react-native-paper";

const ChipParam = ({ containerStyle, chipAction, chipActionCalendar }) => {
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();
  const [selectedConditionChip, setselectedConditionChip] = useState([]);
  const [selectedActionChip, setselectedActionChip] = useState([]);
  useEffect(() => {
    const chipArrayConditions = [];
    for (let i = 0; i < scenario.conditions.length; i++) {
      chipArrayConditions.push(false);
    }
    setselectedConditionChip(chipArrayConditions);
    const chipArrayActions = [];
    for (let i = 0; i < scenario.actions.length; i++) {
      chipArrayActions.push(false);
    }
    setselectedActionChip(chipArrayActions);
  }, []);

  const actionChips = () => {
    const chips = [];
    scenario.actions.forEach((action) => {
      for (const property in action.options) {
        chips.push(
          <View style={styles.chip} key={i.current}>
            <Chip
              style={{
                backgroundColor: "#4F465A",
              }}
              textStyle={{
                color: "#fff",
              }}
              onPress={chipAction}
            >
              {property}
            </Chip>
          </View>
        );
      }
    });
    return chips;
  };

  const toggleCalendarChipClose = (i) => {
    console.log("close");
    const newState = selectedConditionChip;
    newState[i] = false;
    setselectedConditionChip(newState);
  };

  const toggleCalendarChip = (i) => {
    const newState = selectedConditionChip;
    newState[i] = true;
    setselectedConditionChip(newState);
  };

  const conditionChips = () => {
    const chips = [];
    scenario.conditions.forEach((condition, index) => {
      console.log(condition);
      if (condition.name && condition.name.startsWith("Have")) {
        chips.push(
          <View style={styles.chip} key={index}>
            <Chip
              selected={selectedConditionChip[index]}
              disabled={selectedConditionChip[index]}
              style={{
                backgroundColor: "#4F465A",
              }}
              textStyle={{
                color: "#fff",
              }}
              onPress={() => {
                toggleCalendarChip(index);
                //chipActionCalendar();
              }}
              onClose={() => {
                toggleCalendarChipClose(index);
                //chipActionCalendar();
              }}
            >
              {condition.name}
            </Chip>
          </View>
        );
      } else {
        for (const property in condition.options) {
          chips.push(
            <View style={styles.chip} key={index}>
              <Chip
                style={{
                  backgroundColor: "#4F465A",
                }}
                textStyle={{
                  color: "#fff",
                }}
                onPress={chipAction}
              >
                {property}
              </Chip>
            </View>
          );
        }
      }
    });
    return chips;
  };

  return (
    <View style={containerStyle}>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
  },
});

export default ChipParam;

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const ConditionButton = ({ onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress} style={styles.conditionButtonContainer}>
    <Icon name={icon.name} size={125} color="white" style={styles.conditionIcon} />
    <Text style={styles.conditionButtonText}>{title}</Text>
  </TouchableOpacity>
);

const MediumConditionButton = ({ onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress} style={styles.mediumConditionButtonContainer}>
    <Icon name={icon.name} size={100} color="white" style={styles.conditionIcon} />
    <Text style={styles.conditionButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  conditionButtonContainer: {
    elevation: 8,
    backgroundColor: "#7C7F80",
    borderRadius: 10,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
    height: '45%'
  },
  mediumConditionButtonContainer: {
    elevation: 8,
    backgroundColor: "#7C7F80",
    borderRadius: 10,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
    height: '35%'
  },
  conditionButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding: 10
  },
  conditionIcon: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 30
  }
});

export { ConditionButton, MediumConditionButton };
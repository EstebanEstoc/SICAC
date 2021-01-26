import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { GetCalendarsNameList } from "../../services/conditions/calendar/providers/GoogleCalendarRepository";
import { modifyDefaultCalendarID } from "../../reducers/configuration/configurationSlice";

const SmartWatchSelector = ({ containerStyle }) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    // this is the parent or 'item'
    {
      name: "Apple Watch SE",
      id: "10",
    },
    {
      name: "Samsung Galaxy 3",
      id: "17",
    },
    {
      name: "Apple Watch 6",
      id: "13",
    },
    {
      name: "Fitbit Versa 3",
      id: "14",
    },
    {
      name: "Fossil Sport",
      id: "15",
    },
    {
      name: "Honor Magic Watch 2",
      id: "16",
    },
  ];

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#008e96" : "#00BAC5";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style
      />
    </View>
  );
};
const mainColor = "#00BAC5";
const secondaryColor = "#008e96";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    justifyContent: "center",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

    margin: 12,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowColor: "#00BAC5",
    borderColor: "#008e96",
    borderWidth: 2,
    backgroundColor: "#00BAC5",
  },
  title: {
    fontSize: 20,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    margin: 12,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowColor: mainColor,
    borderColor: secondaryColor,
    borderWidth: 2,
    backgroundColor: mainColor,
  },
});

export default SmartWatchSelector;

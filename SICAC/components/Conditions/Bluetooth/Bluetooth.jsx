import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Bluetooth = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#3298BA" : "#0BD4EA";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.containerMain}>
      <Text style={styles.containerText}>Sélectionner la télévision que vous voulez connecter: </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>

  );
};

const styles = StyleSheet.create({

  containerMain: {
    width: "100%",
    height: "100%",
  },
  containerText: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 50,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 46,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
  },
});

export default Bluetooth;
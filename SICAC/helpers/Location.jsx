import React from 'react';
import { View, StyleSheet, Button, Text } from "react-native";

import Root from "./components/Root";
import { getLocation } from "./services/locationGPS/GetLocation";



const App = () => {

  getLocation().then((lat) => console.log("lat dans app " + lat));

  return (
    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> latitude =  </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default App;

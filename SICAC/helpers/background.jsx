import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";

import BackgroundJob from "react-native-background-job";

BackgroundJob.register({
  jobKey: "myJob",
  job: () => console.log(`ceci est un job en background`)
});


export default class BackTest extends Component{

  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.schedule({
              jobKey: "myJob",
              notificationTitle: "tâche Background",
              notificationText: "tâche Background",
              period: 1000
            });
          }}
        >
        <Text>launch background task</Text>
        </TouchableHighlight>
      </View>
    );
}
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

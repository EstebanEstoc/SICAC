import React, { useState, useLayoutEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import EmailChip from "react-native-email-chip";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MailAction = ({ navigation }) => {
  const [emails, setemails] = useState([]);
  const [core, setcore] = useState("");
  const [subject, setsubject] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={styles.saveButtonContainer}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.prefixContainer}>
          <Text style={styles.prefix}>Message:</Text>
          <TextInput
            multiline
            placeholder="Type the notification message that will be sent"
            underlineColorAndroid="transparent"
            onChangeText={(input) => setsubject(input)}
            style={styles.subjectInput}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BAC5",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  prefixContainer: {
    borderRadius: 50,
    backgroundColor: "#E8E7E5",
    flexDirection: "column",
    paddingTop: 30,
    marginTop: 50,
    marginHorizontal: 10,
  },
  prefix: {
    paddingLeft: 20,
    fontSize: 18,
    color: "#7C7F80",
  },
  subjectInput: {
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 30,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  saveButtonContainer: {
    elevation: 8,
    backgroundColor: "#093E60",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 10,
  },
});

export default MailAction;

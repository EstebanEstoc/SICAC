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
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.form}>
          <View style={styles.prefixContainer}>
            <Text style={styles.prefix}>To:</Text>
            <View style={styles.inputsContainer}>
              <EmailChip
                emails={emails}
                onChange={(inputs) => setemails(inputs)}
                placeholder={"Enter receiver emails..."}
                chipContainerStyle={styles.chipContainer}
                chipTextStyle={styles.chipText}
                invalidChipContainerStyle={styles.invalidChip}
                textInputStyles={styles.emailInput}
              />
            </View>
          </View>

          <View style={styles.prefixContainer}>
            <Text style={styles.prefix}>Subject:</Text>
            <View style={styles.inputsContainer}>
              <TextInput
                placeholder=""
                underlineColorAndroid="transparent"
                onChangeText={(input) => setsubject(input)}
                style={styles.subjectInput}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerCore}>
        <TextInput
          multiline
          placeholder="Type the email that will be sent..."
          underlineColorAndroid="transparent"
          onChangeText={(input) => setsubject(input)}
          style={styles.coreInput}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E7E5",
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "#4F465A",
    alignItems: "center",
  },
  containerCore: {
    flex: 1,
    alignItems: "flex-start",
    padding: 10,
  },
  inputsContainer: {
    flexDirection: "column",
    flex: 1,
    paddingRight: 20,
    opacity: 1,
  },
  chipContainer: {
    backgroundColor: "#33353A",
  },
  chipText: { color: "#E8E7E5", fontWeight: "bold", fontSize: 13 },
  form: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "95%",
  },
  invalidChip: { backgroundColor: "#F64644" },
  emailInput: {
    color: "black",
    fontSize: 18,
    width: "100%",
  },
  prefixContainer: {
    marginBottom: 10,
    borderRadius: 1000,
    backgroundColor: "#E8E7E5",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  prefix: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 18,
    color: "#7C7F80",
  },
  subjectInput: {
    fontSize: 18,
  },
  coreInput: {
    fontSize: 18,
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

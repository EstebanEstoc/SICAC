import React, { useState, useLayoutEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EmailChipInput from "@arelstone/react-native-email-chip";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";

const MailAction = ({ navigation }) => {
  const [emails, setemails] = useState([]);
  const [core, setcore] = useState("");
  const [subject, setsubject] = useState("");
  const scenario = useSelector((state) => state.createScenario);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          dispatch(addAction({ name: "Send mail : " + subject, options: { to: emails, subject: subject, core: core } }));
          navigation.navigate("CreateScenario");
        }}
          style={styles.saveButtonContainer}>
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
              <EmailChipInput
                entries={emails}
                onSubmit={(emails) => setemails(emails)}
                containerStyle={styles.emailContainer}
                placeholder="Type an email address"
                inputStyle={styles.emailInput}
                placeholderTextColor="#7C7F80"
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
          onChangeText={(input) => setcore(input)}
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
    backgroundColor: "#093E60",
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
  form: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "95%",
  },
  emailContainer: {
    backgroundColor: "#E8E7E5",
    borderBottomRightRadius: 1000,
    borderTopRightRadius: 1000,
  },
  emailInput: { fontSize: 18 },
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
    backgroundColor: "#7C7F80", 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 10,
  },
});

export default MailAction;

import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";
import { Button } from "react-native";

export default function FormSimpleAction({ navigation }) {
  const [question, setquestion] = useState("");

  const dispatch = useDispatch();

  const onChangeQuestion = (question) => {
    setquestion(question);
  };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Input
          label={
            "The question will have only two answer : yes or no. \n\nEnter your question: "
          }
          placeholder="Tap to enter your question"
          leftIcon={{
            type: "font-awesome-5",
            name: "pen-fancy",
            size: 18,
          }}
          style={styles.textInput2}
          defaultValue={""}
          onChangeText={(QuestionInput) => onChangeQuestion(QuestionInput)}
        />
      </View>
      <View style={styles.name}>
        <Button
          title="Submit question"
          onPress={() =>
            question != ""
              ? dispatch(
                  addAction({
                    type: "Form",
                    name: "Simple Form \nQuestion: " + question,
                    question: question,
                    status: 0,
                  })
                ) && navigation.navigate("CreateScenario")
              : alert("Please enter a question")
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
  inputsContainer: {
    margin: 20,
    flexDirection: "column",
    flex: 1,
    paddingRight: 20,
    opacity: 1,
  },

  containerHeader: {
    flex: 1,
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

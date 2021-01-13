import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Input } from "react-native-elements";
import { StyleSheet } from 'react-native';
import { addAction } from "../../reducers/scenarios/createScenarioSlice";
import { Button } from "react-native";

export default function FormAction({ route, navigation }) {
    const dispatch = useDispatch();
    var question = "";

    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Input
                    label="Enter your question: "
                    placeholder="Tap to enter your question"
                    leftIcon={{
                        type: "font-awesome-5",
                        name: "pen-fancy",
                        size: 18,
                    }}
                    style={styles.textInput2}
                    defaultValue={""}
                    onChangeText={(QuestionInput) => question = QuestionInput}
                />
            </View>
            <View style={styles.name}>
                <Button title="Submit question" onPress={() => question != "" ? dispatch(addAction({ name: "Form", question: question, status: 0 })) && navigation.navigate("CreateScenario") : alert("Please enter a question")} />
            </View>

        </View>

    );
}


const styles = StyleSheet.create({

    name: {
        flexDirection: 'row',
        margin: 20,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
    }
})
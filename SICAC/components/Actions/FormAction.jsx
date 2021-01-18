import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { Input } from "react-native-elements";
import { StyleSheet } from 'react-native';
import { addAction } from "../../reducers/scenarios/createScenarioSlice";
import { Button } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import * as ContactRetriver from "../../services/actions/SMS/Contacts";

export default function FormAction({ navigation }) {

    const [question, setquestion] = useState("");

    const [core, setcore] = useState("");
    const [selectedItems, setselectedItems] = useState([]);
    const [selectedContacts, setselectedContacts] = useState([]);
    const [contacts, setcontacts] = useState([]);
    const dispatch = useDispatch();
    const calendar = useRef([]);

    const onSelectedItemsChange = (selectedItems) => {
        setselectedItems(selectedItems);
    };

    const onSelectedItemObjectsChange = (selectedItemObjects) => {
        setselectedContacts(selectedItemObjects);
        console.log(selectedItemObjects)
    };

    const onChangeQuestion = (question) => {
        setquestion(question);
    };

    useEffect(() => {
        ContactRetriver.getContacts().then((contactsList) => {
            setcontacts(contactsList);
            console.log(selectedItems)
        });
    }, []);
    // var question = "";

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
                    onChangeText={(QuestionInput) => onChangeQuestion(QuestionInput)}
                />


            </View>
            <View style={styles.containerHeader}>
                <View style={styles.form}>
                    <View style={styles.prefixContainer}>
                        <Text style={styles.prefix}>To:</Text>
                        <View style={styles.inputsContainer}>
                            <SectionedMultiSelect
                                styles={selectContacts}
                                items={contacts}
                                IconRenderer={Icon}
                                uniqueKey="id"
                                subKey="children"
                                selectText="Choose contacts..."
                                searchPlaceholderText="Search contacts..."
                                showDropDowns={true}
                                readOnlyHeadings={false}
                                showCancelButton={true}
                                onSelectedItemsChange={onSelectedItemsChange}
                                onSelectedItemObjectsChange={onSelectedItemObjectsChange}
                                selectedItems={selectedItems}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.name}>
                    <Button title="Submit question" onPress={() => question != "" && selectedContacts[0] != undefined ? dispatch(addAction({ name: "Form\nQuestion: " + question + "\n Send to: " + selectedContacts.map((info) => " " + info.name ), question: question, status: 0, receivers: selectedContacts })) && navigation.navigate("CreateScenario") : alert("Please enter a question and select at least one contact")} />
                </View>
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
})

const selectContacts = {
    button: {
        backgroundColor: "#083E60",
    },
};
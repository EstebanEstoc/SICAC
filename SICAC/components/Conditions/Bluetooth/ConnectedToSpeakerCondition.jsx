import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { ConditionButton } from "../../Buttons";
import { addCondition } from "../../../reducers/scenarios/createScenarioSlice";


const ConnectedToSpeakerCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                This condition will be met if you are connected via bluetooth to any speakerphone.
            </Text>
            <ConditionButton title="Connected to speaker" size="sm" icon={{ name: "volume-up" }}
                onPress={() => {
                    dispatch(addCondition({ name: "Connected to speaker" }));
                    navigation.navigate("CreateScenario");
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    mainText: {
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 35
    }
});

export default ConnectedToSpeakerCondition;
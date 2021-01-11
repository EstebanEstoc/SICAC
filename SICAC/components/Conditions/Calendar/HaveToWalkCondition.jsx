import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { ConditionButton } from "../../Buttons";
import { addCondition } from "../../../reducers/scenarios/createScenarioSlice";


const HaveToWalkCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                This condition is linked to your Google Calendar.
            </Text>
            <ConditionButton title="Have to take a walk" size="sm" icon={{ name: "tree" }}
                onPress={() => {
                    dispatch(addCondition({ name: "Have to walk" }));
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

export default HaveToWalkCondition;
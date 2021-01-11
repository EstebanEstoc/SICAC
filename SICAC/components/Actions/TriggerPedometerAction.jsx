import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../Buttons";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";


const TriggerPedometerAction = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <ConditionButton title="Trigger the pedometer" size="sm" icon={{ name: "play-circle" }}
                onPress={() => {
                    dispatch(addAction({ name: "Trigger the pedometer" }));
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
    }
});

export default TriggerPedometerAction;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Input } from 'react-native-elements';
import { ConditionButton } from "../../helpers/Buttons";
import { addCondition } from "../../reducers/scenarios/createScenarioSlice";

const HighHeartRateCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();
    var heartRate = "";

    return (
        <View style={styles.container}>
            <Input label="Threshold"
                placeholder="Tap to enter the heart rate threshold"
                onChangeText={(text) => heartRate = text}
                leftIcon={{ type: 'font-awesome', name: 'heart' }} />
            <ConditionButton title="Heart rate superior to this threshold" size="sm" icon={{ name: "heartbeat" }}
                onPress={() => {
                    dispatch(addCondition({ name: "High heart rate (> " + heartRate + " BPM)", options: { threshold: heartRate } }));
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

export default HighHeartRateCondition;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { ConditionButton } from "../../Buttons";
import { addCondition } from "../../../reducers/scenarios/createScenarioSlice";


const ConnectedToHeadphonesCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                This condition will be met if you are connected via bluetooth to any headset type device.
            </Text>
            <ConditionButton title="Connected to headphones" size="sm" icon={{ name: "headphones" }}
                onPress={() => {
                    dispatch(addCondition({ name: "Connected to headphones" }));
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

export default ConnectedToHeadphonesCondition;
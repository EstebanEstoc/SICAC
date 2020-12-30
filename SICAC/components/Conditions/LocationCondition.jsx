import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Input } from 'react-native-elements';
import { MediumConditionButton } from "../../helpers/Buttons";
import { addCondition } from "../../reducers/scenarios/createScenarioSlice";

const LocationCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const dispatch = useDispatch();
    const ref = React.useRef();
    var addressInput = ""

    return (
        <View style={styles.container}>
            <Input label="Address"
                placeholder="Tap to enter the address"
                onChangeText={(text) => addressInput = text}
                leftIcon={{ type: 'font-awesome', name: 'map-pin' }} />
            <MediumConditionButton title="At this address" size="sm" icon={{ name: "map-marker" }}
                onPress={() => {
                    dispatch(addCondition({ name: "At this address : " + addressInput, options: { address: addressInput } }));
                    navigation.navigate("CreateScenario");
                }} />
            <MediumConditionButton title="Away from this address" size="sm" icon={{ name: "map-o" }}
                onPress={() => {
                    dispatch(addCondition({ name: "Away from this address : " + addressInput, options: { address: addressInput } }));
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

export default LocationCondition;
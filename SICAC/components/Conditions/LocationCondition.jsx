import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Input } from 'react-native-elements';
import { MediumConditionButton } from "../../helpers/Buttons";

const LocationCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const ref = React.useRef();

    return (
        <View style={styles.container}>
            <Input placeholder='Address'
                leftIcon={{ type: 'font-awesome', name: 'map-pin' }} />
            <MediumConditionButton title="At this location" size="sm" icon={{ name: "map-marker" }}
                onPress={() => navigation.navigate("CreateScenario")} />
            <MediumConditionButton title="Away from this location" size="sm" icon={{ name: "map-o" }}
                onPress={() => navigation.navigate("CreateScenario")} />
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
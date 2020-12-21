import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ConditionButton } from "../../helpers/Buttons";

const HomeCondition = ({ navigation }) => {
    const scenario = useSelector((state) => state.createScenario);
    const ref = React.useRef();

    return (
        <View style={styles.container}>
            <ConditionButton title="At home" size="sm" icon={{ name: "home" }}
                onPress={() => navigation.navigate("CreateScenario")} />
            <ConditionButton title="Away from home" size="sm" icon={{ name: "plane" }}
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

export default HomeCondition;
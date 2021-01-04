import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { addScenario } from '../reducers/scenarios/scenariosSlice'
import { exampleScenarios } from '../data/Scenarios'

const ExampleScenarios = ({ navigation }) => {
    const dispatch = useDispatch()
    const scenarios = useSelector((state) => state.scenarios);
    const ref = React.useRef();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.mainText}>
                    Click on an example scenario to add it to your scenarios.
                </Text>
                <View style={styles.scenariosView}>
                    {exampleScenarios.map((scenario) => {
                        return (
                            <TouchableOpacity key={scenario.name}
                            onPress={() => {
                                dispatch(addScenario(scenario, scenarios.lastId));
                                navigation.navigate("ScenarioList");
                            }}
                                style={styles.button}>
                                <Text style={styles.buttonText}>{scenario.name}</Text>
                            </TouchableOpacity>
                        )
                    }
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const mainColor = '#00BAC5'
const secondaryColor = '#008e96'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        margin: 8,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 12,
        shadowColor: mainColor,
        borderColor: secondaryColor,
        borderWidth: 2,
        backgroundColor: mainColor
    },
    scenariosView: {
        marginTop: 20
    },
    mainText: {
        fontSize: 20,
        alignSelf: "center"
    }
});

export default ExampleScenarios;
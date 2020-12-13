import React from 'react';
import { View, StyleSheet, Button } from "react-native";

import { getTodaySunrise, getTodaySunset } from "../services/sunriseSunsetAPI/providers/SunriseSunset";
import { isItDaytime, isItNighttime } from "../services/ConditionSunriseSunset";

const SunriseSunsetAPI = () => {
    return (
        <View style={styles.container}>
            <Button onPress={getTodaySunrise} title="Get today's UTC sunrise"></Button>
            <Button onPress={getTodaySunset} title="Get today's UTC sunset"></Button>
            <Button onPress={isItDaytime} title="Is it daytime ?"></Button>
            <Button onPress={isItNighttime} title="Is it nigthtime ?"></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SunriseSunsetAPI;
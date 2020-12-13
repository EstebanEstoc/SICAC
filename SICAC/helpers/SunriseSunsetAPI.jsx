import React from 'react';
import { View, StyleSheet, Button } from "react-native";

import { getTodayUTCSunrise, getTodayUTCSunset } from "../services/sunriseSunsetAPI/providers/SunriseSunset";

const SunriseSunsetAPI = () => {
    return (
        <View style={styles.container}>
            <Button onPress={getTodayUTCSunrise} title="Get today's UTC sunrise"></Button>
            <Button onPress={getTodayUTCSunset} title="Get today's UTC sunset"></Button>
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
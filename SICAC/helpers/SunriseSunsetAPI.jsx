import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from "react-native";

const SunriseSunsetAPI = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // For now the location is Bordeaux
        // TODO Modify latitude and longitude with location from phone (when location is done in the project)
        fetch('https://api.sunrise-sunset.org/json?lat=44.8333&lng=-0.5667&date=today')
            .then((response) => response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const getTodayUTCSunrise = () => {
        return data.sunrise;
    };

    const getTodayUTCSunset = () => {
        return data.sunset;
    };

    return (
        <View style={styles.container}>
            <Text>Sunrise : {getTodayUTCSunrise()}</Text>
            <Text>Sunset : {getTodayUTCSunset()}</Text>
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
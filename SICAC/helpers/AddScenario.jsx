import React from "react";
import styles from "./styles";
import { View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
    addScenario
} from 'reducers/scenarios/scenariosSlice'



const AddScenario = () => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Button title="Add Scenario" onPress={() =>
                dispatch(addScenario({
                    name: 'Mon scenario fun',
                    conditions: [
                        {
                            id: 34,
                            name: "bluetooth",
                            options: {}
                        },
                        {
                            id: 75,
                            name: "home",
                            options: {
                                auth: '33442243654234_fg'
                            }
                        }
                    ],
                    actions: [
                        {
                            id: 45,
                            name: "sms",
                            options: {}
                        },
                        {
                            id: 30,
                            name: "mail",
                            options: {
                                lng: -45,
                                lat: 35
                            }
                        }
                    ]
                }))
            } />
        </View>
    );

}

export default AddScenario;






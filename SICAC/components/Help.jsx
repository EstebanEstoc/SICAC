
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

import { Button } from 'react-native-elements';
import { actions } from '../data/Actions'
//import createscenario from '../assets/createscenario.png'


const Help = ({ navigation }) => {

    const CreateScenarioImage = require('../assets/createscenario.png')
    const AddConditionImage = require('../assets/addcondition.png')
    const SelectConditonsImage = require('../assets/selectaction.png')

    return (
        <ScrollView style={styles.containerMain}>



            <Text style={styles.containertextmain}>To create a scenario: </Text>
            <Text>{'\n'}</Text>
            <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Click on "CREATE A NEW SCENARIO" on the home menu </Text>
            </View>

            
            
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={CreateScenarioImage}
                />
            </View>

            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Click on "Add a condition" </Text>
            </View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={AddConditionImage}
                />
            </View>

            <Text>{'\n'}</Text>
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Select the condition you whant to add by clicking on the icons and start again if you want to add a new condition </Text>
            </View>

            <Text>{'\n'}</Text>
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Click on actions on the bottom of the screen </Text>
            </View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={SelectConditonsImage}
                />
            </View>

            <Text>{'\n'}</Text>
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Click on "Add a condition", select the action(s) and click on resume </Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
                <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                <Text style={{fontSize: 15}}>  Enter the scenario name and click on "CREATE THIS SCENARIO" {"\n\n"}</Text>
            </View>
            

            




        </ScrollView>
    );
};


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containertextmain: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
    },
    containertext: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 15,
    },

    containerText: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    buttonStyle: {
        width: 100,
        height: 100,
        flexDirection: 'column',
        borderRadius: 20,
    },
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
    },
    inputStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 30,
    }

});

export default Help;
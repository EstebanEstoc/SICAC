
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { Button } from 'react-native-elements';
import { actions } from '../data/Actions'



const ActionType = ({ navigation }) => {



    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>

            <View style={styles.containerMain}>
                {

                    actions.map((item) => {
                        return (
                            <Button key={item.id} title={item.Title} titleStyle={{ color: 'black' }}
                                type="outline" icon={{ name: item.IconName, size: 40 }}
                                buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate(item.Action)} />
                        )
                    }).reduce(function (r, element, index) {
                        index % 2 === 0 && r.push([]);
                        r[r.length - 1].push(element);
                        return r;
                    }, []).map((ViewContent) => {
                        return (
                            <View style={styles.flexContainer} key={Math.random()}>{ViewContent}</View>
                        )
                    })

                }
            </View >
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    containerMain: {
        marginTop: 50,
        width: "100%",
        height: "100%",
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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 30,
    }

});

export default ActionType;
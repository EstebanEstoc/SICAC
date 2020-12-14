
import React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from 'react-native-elements';
import { conditions } from '../data/Conditions'



const ConditionType = () => {
    return (
        <View style={styles.containerMain}>
                {
                    
                        conditions.map((item) => {
                            return (
                                <Button key={item.id} title={item.Title} titleStyle={{ color: 'black' }} type="outline" icon={{ name: item.IconName, size: 40 }} buttonStyle={styles.buttonStyle} />
                            )
                        }).reduce(function(r, element, index) {
                            index % 2 === 0 && r.push([]);
                            r[r.length - 1].push(element);
                            return r;
                        }, []).map((ViewContent) => {
                            return(
                                <View style={styles.flexContainer}>{ ViewContent }</View>
                            )
                        })
                    
                }
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
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
        width: 90,
        height: 90,
        flexDirection: 'column',
        borderRadius: 20,
    }



});

export default ConditionType;
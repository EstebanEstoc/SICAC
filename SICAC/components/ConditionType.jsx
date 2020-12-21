import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";

import { Button } from 'react-native-elements';
import { conditions } from '../data/Conditions'



const ConditionType = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <View style={styles.containerMain}>
                {

                    conditions.map((item) => {
                        return (
                            <Button key={item.id} title={item.Title} titleStyle={{ color: 'black' }}
                                type="outline" icon={{ name: item.IconName, size: 40 }}
                                buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate(item.Condition)} />
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
    }

});

export default ConditionType;
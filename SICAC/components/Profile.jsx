import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import { modifyHouseWifi, setRelativesNumbers, modifyDoctoreNumber, modifySmarWatch, modifyDefaultCalendarID, modifyCardiacThreshold } from "../reducers/configuration/configrationSlice";
import { GetCalendarsNameList } from "../services/conditions/calendar/providers/GoogleCalendarRepository";


const Profile = ({ navigation }) => {
    const configuration = useSelector((state) => state.configuration);
    const dispatch = useDispatch();
    const [calendarList, setcalendarList] = useState(undefined);

    var calendarInput = configuration.defaultCalendarID;
    var cardiacThreshold = configuration.cardiacThreshold.toString();
    var doctorNumberInput = configuration.doctorNumber.toString();
    var relativesNumbersInput = configuration.relativesNumbers;

    useEffect(() => {
        GetCalendarsNameList().then((calendars) => {
          setcalendarList(calendars);
        });
      }, []);

    return (
        <View containerStyle={styles.container}>
            <Text style={styles.labelText}>Calendar ID</Text>

            <View style={styles.littleContainer}>
                {calendarList && (
                    <Picker
                        selectedValue={calendarInput}
                        style={{ width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => {
                            calendarInput = itemValue;
                        }} >
                        {calendarList.map((item, key) => (
                            <Picker.Item label={item.name} key={key} value={item.id} />
                        ))}
                    </Picker>
                )}
            </View>

            <Input label="Doctor's number"
                placeholder="Tap to enter your doctor's number"
                defaultValue={doctorNumberInput}
                onChangeText={(text) => doctorNumberInput = text}
                autoCompleteType="tel"
                leftIcon={{ type: 'font-awesome', name: 'phone' }} />

            <Text style={styles.labelText}>Relatives' numbers</Text>

            <Input label="Cardiac threshold"
                placeholder="Tap to enter your cardiac threshold"
                defaultValue={cardiacThreshold}
                editable={true}
                onChangeText={(text) => cardiacThreshold = text}
                autoCompleteType="cc-number"
                leftIcon={{ type: 'font-awesome', name: 'heart' }} />

            <Text style={styles.labelText}>Smartwatch</Text>

            <Text style={styles.labelText}>Wifi</Text>

            <View style={styles.floatingButton}>
                <TouchableOpacity
                    onPress={() => {
                        // dispatch()
                        navigation.navigate("Profile");
                    }}
                    style={styles.modifyProfileButton} >
                    <Text style={styles.modifyProfileButtonText}>Save my profile changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    littleContainer: {
        flex: 1,
        justifyContent: 'center',
        borderColor: 'grey', 
        backgroundColor: 'white',
        borderWidth: 1, 
        borderRadius: 4,
        margin: 10
    },
    labelText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 10
    },
    modifyProfileButton: {
        alignSelf: 'stretch',
        margin: 10,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowColor: "#00BAC5",
        borderColor: "#00BAC5",
        borderWidth: 2,
        backgroundColor: "#fff"
    },
    modifyProfileButtonText: {
        textAlign: 'center',
        width: '100%',
        textTransform: 'uppercase',
        fontSize: 22,
        color: "#00BAC5",
        fontWeight: "bold",
        alignSelf: "center",
    },
    floatingButton: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 0
    },
});

export default Profile;
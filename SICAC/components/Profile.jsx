import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import { modifyHouseWifi, setRelativesNumbers, modifyDoctoreNumber, modifySmarWatch, modifyDefaultCalendarID, modifyCardiacThreshold } from "../reducers/configuration/configurationSlice";
import * as ContactRetriver from "/services/actions/SMS/Contacts";
import { GetCalendarsNameList } from "../services/conditions/calendar/providers/GoogleCalendarRepository";


const Profile = ({ navigation }) => {
    const configuration = useSelector((state) => state.configuration);
    const dispatch = useDispatch();
    const [calendarList, setcalendarList] = useState();
    const [calendarID, setcalendarID] = useState(configuration.defaultCalendarID);
    const [contacts, setcontacts] = useState([]);
    const [selectedRelatives, setselectedRelatives] = useState([]);
    const [selectedSmartWatch, setselectedSmartWatch] = useState(configuration.smartWatch);

    var cardiacThreshold = configuration.cardiacThreshold.toString();
    var doctorNumberInput = configuration.doctorNumber.toString();

    useEffect(() => {
        GetCalendarsNameList().then((calendars) => {
            setcalendarList(calendars);
        });
        ContactRetriver.getContacts().then((contactsList) => {
            setcontacts(contactsList);
        });
    }, []);

    const smartWatches = [
        {
            name: "Choose a smartwatch...",
            id: "0",
        },
        {
            name: "Apple Watch SE",
            id: "10",
        },
        {
            name: "Samsung Galaxy 3",
            id: "17",
        },
        {
            name: "Apple Watch 6",
            id: "13",
        },
        {
            name: "Fitbit Versa 3",
            id: "14",
        },
        {
            name: "Fossil Sport",
            id: "15",
        },
        {
            name: "Honor Magic Watch 2",
            id: "16",
        },
    ];

    const renderSmartWatch = ({ item }) => {
        const backgroundColor = item.id === selectedSmartWatch ? 'grey' : 'white';

        return (
            <SmartWatch
                item={item}
                onPress={() => () => {
                    setselectedSmartWatch(item.id);
                    backgroundColor = 'grey'
                }}
                style={{ backgroundColor }}
            />
        );
    };

    const SmartWatch = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View containerStyle={styles.container}>
            <ScrollView>
                <Text style={styles.labelText}>Calendar ID</Text>

                <View style={styles.littleContainer}>
                    {calendarList && (
                        <Picker
                            selectedValue={calendarID}
                            style={{ width: "100%" }}
                            onValueChange={(itemValue, itemIndex) => {
                                setcalendarID(itemValue);
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
                <View style={styles.littleContainer}>
                    <SectionedMultiSelect
                        items={contacts}
                        IconRenderer={Icon}
                        uniqueKey="id"
                        subKey="children"
                        selectText="Choose contact..."
                        showDropDowns={true}
                        readOnlyHeadings={false}
                        showCancelButton={true}
                        onSelectedItemsChange={(selectedItems) => {
                            setselectedRelatives(selectedItems)
                        }}
                        selectedItems={selectedRelatives}
                    />
                </View>

                <Input label="Cardiac threshold"
                    placeholder="Tap to enter your cardiac threshold"
                    defaultValue={cardiacThreshold}
                    onChangeText={(text) => cardiacThreshold = text}
                    autoCompleteType="cc-number"
                    leftIcon={{ type: 'font-awesome', name: 'heart' }} />

                <Text style={styles.labelText}>Smartwatch</Text>
                <View style={styles.littleContainer}>
                    <Picker
                        selectedValue={selectedSmartWatch}
                        style={{ width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => {
                            setselectedSmartWatch(itemValue);
                        }} >
                        {smartWatches.map((item, key) => (
                            <Picker.Item label={item.name} key={key} value={item.id} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.floatingButton}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(modifyDefaultCalendarID(calendarID));
                            dispatch(modifyDoctoreNumber(doctorNumberInput));
                            dispatch(setRelativesNumbers(selectedRelatives));
                            dispatch(modifyCardiacThreshold(cardiacThreshold));
                            dispatch(modifySmarWatch(selectedSmartWatch));
                            navigation.navigate("Home");
                        }}
                        style={styles.modifyProfileButton} >
                        <Text style={styles.modifyProfileButtonText}>Save my profile changes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
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
        margin: 10,
        marginBottom: 25
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
    }
});

export default Profile;
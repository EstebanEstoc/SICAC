import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { addAction } from "../../reducers/scenarios/createScenarioSlice";
import * as ContactRetriver from "../../services/actions/SMS/Contacts";
import ChipParam from "../ChipParam";

const SMSAction = ({ navigation }) => {
  const [core, setcore] = useState("");
  const [selectedItems, setselectedItems] = useState([]);
  const [selectedContacts, setselectedContacts] = useState([]);
  const [contacts, setcontacts] = useState([]);
  const dispatch = useDispatch();
  const calendar = useRef([]);

  const onSelectedItemsChange = (selectedItems) => {
    setselectedItems(selectedItems);
  };

  const onSelectedItemObjectsChange = (selectedItemObjects) => {
    setselectedContacts(selectedItemObjects);
  };

  useEffect(() => {
    ContactRetriver.getContacts().then((contactsList) => {
      setcontacts(contactsList);
    });
  }, []);

  const chipAction = (stringToAdd) => {
    setcore((old) => `${old} ${stringToAdd}`);
  };

  const chipActionCalendar = (addCalendarResult, CalendarName) => {
    const calendarIndex = calendar.current.indexOf(CalendarName);
    if (addCalendarResult) {
      if (calendarIndex === -1) {
        calendar.current.push(CalendarName);
      }
    } else {
      calendar.current.splice(calendarIndex, 1);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            dispatch(
              addAction({
                type: "SendSMS",
                name: "Send SMS to " + selectedItems,
                options: { to: selectedContacts, core: core },
                calendar: calendar.current,
              })
            );
            navigation.navigate("CreateScenario");
          }}
          style={styles.saveButtonContainer}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.form}>
          <View style={styles.prefixContainer}>
            <Text style={styles.prefix}>To:</Text>
            <View style={styles.inputsContainer}>
              <SectionedMultiSelect
                styles={selectContacts}
                items={contacts}
                IconRenderer={Icon}
                uniqueKey="id"
                subKey="children"
                selectText="Choose contacts..."
                searchPlaceholderText="Search contacts..."
                showDropDowns={true}
                readOnlyHeadings={false}
                showCancelButton={true}
                onSelectedItemsChange={onSelectedItemsChange}
                onSelectedItemObjectsChange={onSelectedItemObjectsChange}
                selectedItems={selectedItems}
              />
            </View>
          </View>
        </View>
      </View>
      <ChipParam
        containerStyle={{ flex: 1 }}
        chipAction={chipAction}
        chipActionCalendar={chipActionCalendar}
      />
      <View style={styles.containerCore}>
        <TextInput
          multiline
          placeholder="Type the sms that will be sent..."
          underlineColorAndroid="transparent"
          onChangeText={(input) => setcore(input)}
          style={styles.coreInput}
          value={core}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E7E5",
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "#093E60",
    alignItems: "center",
  },
  containerCore: {
    flex: 1,
    alignItems: "flex-start",
    padding: 10,
  },
  inputsContainer: {
    flexDirection: "column",
    flex: 1,
    paddingRight: 20,
    opacity: 1,
  },
  form: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "95%",
  },
  prefixContainer: {
    marginBottom: 10,
    borderRadius: 1000,
    backgroundColor: "#E8E7E5",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  prefix: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 18,
    color: "#7C7F80",
  },
  coreInput: {
    fontSize: 18,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  saveButtonContainer: {
    elevation: 8,
    backgroundColor: "#7C7F80",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 10,
  },
});

const selectContacts = {
  button: {
    backgroundColor: "#083E60",
  },
};

export default SMSAction;

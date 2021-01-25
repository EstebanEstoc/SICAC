import React, { useState, useLayoutEffect, useRef } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { addAction } from "../../reducers/scenarios/createScenarioSlice";
import ChipParam from "../ChipParam";

const NotificationAction = ({ navigation }) => {
  const [subject, setsubject] = useState("");
  const [title, settitle] = useState("");
  const dispatch = useDispatch();
  const calendar = useRef([]);

  const chipAction = (stringToAdd) => {
    setsubject((old) => `${old} ${stringToAdd}`);
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
                type: "SendNotif",
                name: "Send notification : " + title,
                options: { core: subject, title: title },
                calendar,
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
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.prefixContainerTitle}>
          <Text style={styles.prefix}>Title:</Text>
          <TextInput
            placeholder="Type the notification title"
            underlineColorAndroid="transparent"
            onChangeText={(input) => settitle(input)}
            style={styles.titleInput}
            value={title}
          />
        </View>
        <ChipParam
          containerStyle={{ flex: 1 }}
          chipAction={chipAction}
          chipActionCalendar={chipActionCalendar}
        />
        <View style={styles.prefixContainer}>
          <Text style={styles.prefix}>Message:</Text>
          <TextInput
            multiline
            placeholder="Type the notification message that will be sent"
            underlineColorAndroid="transparent"
            onChangeText={(input) => setsubject(input)}
            style={styles.subjectInput}
            value={subject}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#093E60",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  prefixContainer: {
    borderRadius: 50,
    backgroundColor: "#E8E7E5",
    flexDirection: "column",
    paddingTop: 30,
    marginTop: 20,
    marginHorizontal: 10,
  },
  prefixContainerTitle: {
    borderRadius: 50,
    backgroundColor: "#E8E7E5",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 10,
  },
  prefix: {
    paddingLeft: 20,
    fontSize: 18,
    color: "#7C7F80",
  },
  titleInput: {
    fontSize: 18,
  },
  subjectInput: {
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 30,
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

export default NotificationAction;

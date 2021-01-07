import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { GetCalendarsNameList } from "../services/conditions/calendar/providers/GoogleCalendarRepository";
import { modifyDefaultCalendarID } from "../reducers/configuration/configrationSlice";

const CalendarSelector = ({ containerStyle }) => {
  const calendarID = useSelector(
    (state) => state.configuration.defaultCalendarID
  );
  const dispatch = useDispatch();
  const [calendarList, setcalendarList] = useState(undefined);

  useEffect(() => {
    GetCalendarsNameList().then((calendars) => {
      setcalendarList(calendars);
    });
  }, []);

  return (
    <View style={containerStyle}>
      {calendarList && (
        <Picker
          selectedValue={calendarID}
          style={{ height: "100%", width: "100%" }}
          onValueChange={(itemValue, itemIndex) =>
            dispatch(modifyDefaultCalendarID(itemValue))
          }
        >
          {calendarList.map((item, key) => (
            <Picker.Item label={item.name} key={key} value={item.id} />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default CalendarSelector;

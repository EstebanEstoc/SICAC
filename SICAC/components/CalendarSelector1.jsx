import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View,FlatList,StyleSheet,StatusBar,Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { GetCalendarsNameList } from "../services/conditions/calendar/providers/GoogleCalendarRepository";
import { modifyDefaultCalendarID } from "../reducers/configuration/configurationSlice";

const CalendarSelector = ({ containerStyle }) => {
  const calendarID = useSelector(
    (state) => state.configuration.defaultCalendarID
  );
  const dispatch = useDispatch();
  const [calendarList, setcalendarList] = useState(undefined);

  

  const renderItem = ({ item }) => (
    <Item title={item.name} />);
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  useEffect(() => {
    GetCalendarsNameList().then((calendars) => {
      setcalendarList(calendars);
      console.log(calendarList);
    });




  }, []);

  return (
    <View style={containerStyle}>
      {/* {calendarList && (
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
        



      )} */}

      <FlatList
              data={calendarList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />

    </View>



  );


 

};

export default CalendarSelector;

import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";

import * as CalendarAPI from "../services/conditions/calendar/ConditionCalendar";

const Calendar = () => {
  const [display, setdisplay] = useState("Test Text");

  return (
    <View style={styles.container}>
      <Button
        title="Pills"
        onPress={async () =>
          setdisplay(
            "Pills:" + JSON.stringify(await CalendarAPI.getPillCondition())
          )
        }
      ></Button>
      <Button
        title="Walk"
        onPress={async () =>
          setdisplay(
            "Walk:" + JSON.stringify(await CalendarAPI.haveToWalkConditon())
          )
        }
      ></Button>
      <Button
        title="Appointment"
        onPress={async () =>
          setdisplay(
            "Appointment:" +
              JSON.stringify(await CalendarAPI.haveAnAppointment())
          )
        }
      ></Button>
      <Button
        title="Form"
        onPress={async () =>
          setdisplay("Form:" + JSON.stringify(await CalendarAPI.answerForm()))
        }
      ></Button>
      <Button
        title="Event List"
        onPress={async () => {
          console.log(await CalendarAPI.GetEventsTitleList());
          setdisplay(
            "Events:" + JSON.stringify(await CalendarAPI.GetEventsTitleList())
          );
        }}
      ></Button>
      <Button
        title="Another Event"
        onPress={async () =>
          setdisplay(
            "Another Event:" +
              JSON.stringify(
                await CalendarAPI.currentEvent("0q7smq8bosbtqv7j8p95ht88pu")
              )
          )
        }
      ></Button>

      <Text>{display}</Text>
    </View>
  );
};

export default Calendar;

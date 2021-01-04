import React from "react";
import { Button, View } from "react-native";
import * as SMS from "../services/actions/SMS/SMS";
import * as ContactsApi from "../services/actions/SMS/Contacts";
import styles from "./styles";

const Sms = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Send SMS"
        onPress={() => SMS.sendSMS("+33646377796", "test")}
      ></Button>
      <Button
        title="Contact List"
        onPress={async () => {
          console.log(await ContactsApi.getContacts());
        }}
      ></Button>
    </View>
  );
};

export default Sms;

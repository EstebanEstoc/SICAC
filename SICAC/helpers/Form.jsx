import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { ChangeFormActionStatus } from "../services/actions/Form/Form";

import { useDispatch } from "react-redux";

const Form = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Button onPress={() => ChangeFormActionStatus({id: 28, value: 1, dispatch})} title="ChangeFormActionStatus"></Button>
        </View>
    );
};

export default Form;

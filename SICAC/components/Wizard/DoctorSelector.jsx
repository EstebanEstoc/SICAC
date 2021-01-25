import React, { useState, Component, useEffect } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import * as ContactRetriver from "/services/actions/SMS/Contacts";
import { modifyDoctoreNumber } from "../../reducers/configuration/configurationSlice";
import { useDispatch } from "react-redux";

const DoctorSelector = () => {
  const [contacts, setcontacts] = useState([]);
  const [selectedItems, setselectedItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    ContactRetriver.getContacts().then((contactsList) => {
      setcontacts(contactsList);
    });
  }, []);

  const onSelectedItemsChange = (selectedItems) => {
    setselectedItems(selectedItems);
  };

  const onSelectedItemObjectsChange = (selectedItemObjects) => {
    dispatch(modifyDoctoreNumber(selectedItemObjects[0].phone));
  };

  return (
    <View>
      <SectionedMultiSelect
        styles={selectContacts}
        items={contacts}
        single={true}
        IconRenderer={Icon}
        uniqueKey="id"
        subKey="children"
        selectText="Choose contact..."
        showDropDowns={true}
        readOnlyHeadings={false}
        showCancelButton={true}
        onSelectedItemsChange={onSelectedItemsChange}
        onSelectedItemObjectsChange={onSelectedItemObjectsChange}
        selectedItems={selectedItems}
      />
    </View>
  );
};

const selectContacts = {
  button: {
    backgroundColor: "#083E60",
  },
};

export default DoctorSelector;

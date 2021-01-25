import React, { useState, Component,useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import * as ContactRetriver from "/services/actions/SMS/Contacts";



const Selector = () => {

  const [contacts, setcontacts] = useState([]);


  useEffect(() => {
    ContactRetriver.getContacts().then((contactsList) => {
      setcontacts(contactsList);
    });
  }, []);


    const items = [
        // this is the parent or 'item'
            {
              name: 'Jean pierre',
              id: 10,
            },
            {
              name: 'Sandrine Leblanc',
              id: 17,
            },
            {
              name: 'General practioner',
              id: 13,
            },
            {
              name: '',
              id: 14,
            },
            {
              name: 'Watermelon',
              id: 15,
            },
            {
              name: 'Kiwi fruit',
              id: 16,
            },
      
      ];

  const [selectedItems, setselectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setselectedItems( selectedItems );
  };

  
    return (
      <View>
        <SectionedMultiSelect
          styles={selectContacts}
          items={contacts}
          single = {true}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose contact..."
          showDropDowns={true}
          readOnlyHeadings={false}
          showCancelButton={true}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
        />
      </View>
    );
  
}

const selectContacts = {
    button: {
      backgroundColor: "#083E60",
    },
  };

export default Selector;
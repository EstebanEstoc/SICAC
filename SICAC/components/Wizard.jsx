import React, { Component,useRef, useState  } from "react"

import { Button, SafeAreaView, View, Text,StyleSheet, Alert } from "react-native"
// Wizard
import Wizard from "react-native-wizard"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {toggleWizTrue} from "../reducers/configuration/configurationSlice";
import {store} from "../store/store";
import { useDispatch } from "react-redux";


const WizardScreen = ()=>{
  const wizard = useRef()
  const [isFirstStep, setIsFirstStep] = useState()
  const [isLastStep, setIsLastStep] = useState()
  const [currentStep, setCurrentStep] = useState(0)
  const [gestureName, setGestureName] = React.useState('none');
  const dispatch = useDispatch();
 
  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_LEFT:
        wizard.current.next();
        break;
      case SWIPE_RIGHT:
        wizard.current.prev();
        break;
    }
  }
 
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    duration: 10
  };
  const stepList = [
    {
      content: <View style={styles.container}>
        <Text style = {styles.bigBlue}>Google Authentification</Text>
        <Text style = {styles.smallBlue}>Please input your credentials</Text>
        </View>
    },
    {
        content: <View style={styles.container}>
          <Text style = {styles.bigBlue}>Google Calendar</Text>
          <Text style = {styles.smallBlue}>Please choose the google calendar you want to use</Text>
          </View>
      },
    {
      content: <View style={styles.container}>
        <Text style = {styles.bigBlue}>Authorization approval</Text>
        <Text style = {styles.smallBlue}>Please allow access to the following information</Text>
        </View>
    },
    {
      content: <View style={styles.container}>
        <Text style = {styles.bigBlue}>Are you at home ?</Text>
        <View style={styles.fixToText}>
        <Button
          title="Yes"
          color="#093E60"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="No"
          color="#F64644"
          onPress={() => Alert.alert('Right button pressed')}
        />
        </View>
        </View>,
    },
    {

      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Health</Text>
      <Text style = {styles.smallBlue}> Please input your information relative to your health. This part can be skipped   </Text>
        <View style = {styles.buttonskip}>
      <Button
          title="SKIP"
          color="#F64644"
          onPress={() => wizard.current.goTo(9)}
        />
        </View>
    </View>,
    },
    {
      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Phone number of a relative</Text>
    </View>,
    },
    {
      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Phone number of your general practitioner</Text>
    </View>,
    },
    {
      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Which of these devices is your smartwatch ?</Text>
    </View>,
    },
    {
      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Heart rate threshold</Text>
    </View>,
    },
    {
      content: <View style={styles.container}>
      <Text style = {styles.bigBlue}>Thank you</Text>
      <Text style = {styles.smallBlue}>You can now acces the application</Text>
      <Button
          title="FINISH"
          color="#F64644"
          onPress={() => dispatch(toggleWizTrue())}
        />
    </View>,
    },
  ]
  return (
    <GestureRecognizer
    onSwipe={(direction, state) => onSwipe(direction, state)}
    config={config}
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff"
    }}
    >
    <View style = {{ flex: 1,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',}} >
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Wizard
          nextStepAnimation="slideRight"
          ref={wizard}
          steps={stepList}
          duration={100}
          isFirstStep={val => setIsFirstStep(val)}
          isLastStep={val => setIsLastStep(val)}
          onNext={() => {
            console.log("Next Step Called")
          }}
          onPrev={() => {
            console.log("Previous Step Called")
          }}
          currentStep={({ currentStep, isLastStep, isFirstStep }) => {
            setCurrentStep(currentStep)
          }}
        />
        <View style={{ flexDirection: "row", margin: 18,justifyContent: "center" }}>
          {stepList.map((val, index) => (
            <View
              key={"step-indicator-" + index}
              style={{
                width: 10,
                marginHorizontal: 6,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentStep ? "#fc0" : "#000",
              }}
            />
          ))}
        </View>
      </View>  
    </View>
    </GestureRecognizer>
  )
}




const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
  },
  bigBlue: {
    textAlign: "center",
    color: "#093E60",
    fontWeight: 'bold',
    fontSize: 30,
  },
  smallBlue: {
    textAlign: "center",
    color: "#093E60",
    fontWeight: 'normal',
    fontSize: 15,
  },
  fixToText: {
  
    flexDirection: 'row',
    margin: 70,
    justifyContent: 'space-between',
  },
  buttonskip: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
});


export default WizardScreen;
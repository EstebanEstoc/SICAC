import { StyleSheet } from 'react-native';

const colors = {
  actions: {
    main: '#EECC49',
    secondary: '#c1a43c',
  },
  conditions: {
    main: '#F64644',
    secondary: '#b23030'
  }
}

const styles = StyleSheet.create({
    arrow: {
      alignSelf: 'center',
      marginTop: 20
    },
    name: {
      flexDirection: 'row',
      margin: 20,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    textInput: {
      width: '80%',
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1
    },
    itemList: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    cardText: {
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
    },
    card: {
      alignSelf: 'stretch',
      margin: 10,
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 2,
    },
    cardAction: {
      shadowColor: colors.actions.main,
      borderColor: colors.actions.secondary,
      backgroundColor: colors.actions.main
    },
    cardCondition: {
      shadowColor: colors.conditions.main,
      borderColor: colors.conditions.secondary,
      backgroundColor: colors.conditions.main
    },
    scenario: {
      alignSelf: 'center',
      width: '75%',
      marginBottom: 40
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    newScenarioButton: {
      alignSelf: 'stretch',
      margin: 10,
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      shadowColor: "#00BAC5",
      borderColor: "#00BAC5",
      borderWidth: 2,
      backgroundColor: "#fff"
    },
    newScenarioButtonText: {
      textAlign: 'center',
      width: '100%',
      textTransform: 'uppercase',
      fontSize: 22,
      color: "#00BAC5",
      fontWeight: "bold",
      alignSelf: "center",
    },
    floatingButton: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      marginBottom: 0
    },
    scrollView: {
      flexShrink: 1,
      marginTop: 40,
    },
  })

  export default styles
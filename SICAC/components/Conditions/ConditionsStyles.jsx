import { StyleSheet } from 'react-native';

export const mainColor = '#F64644'
export const secondaryColor = '#9e2a29'

const styles = StyleSheet.create({
    title: {
      alignSelf: 'center',
      fontSize: 24,
      marginTop: 20,
      marginBottom: 20,
    },
    itemList: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    addButtonSection: {
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
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
      shadowColor: mainColor,
      borderColor: secondaryColor,
      borderWidth: 2,
      backgroundColor: mainColor
    },
    addButtonIcon: {
      alignItems: 'center',
      margin: 10,
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 8,
      shadowColor: mainColor,
      borderColor: secondaryColor,
      borderWidth: 2,
    },
    addButtonText: {
      alignSelf: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  })

  export default styles
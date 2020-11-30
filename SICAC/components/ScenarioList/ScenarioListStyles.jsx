import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
    color: '#000',
  },
  subCategoriesList: {
    marginTop: 20,
    width: '80%',
    color: '#000',
  },
  subCategoriesListButton: {
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
    paddingHorizontal: 12
  },
  subCategoriesListEnabled: {
    shadowColor: "#00BAC5",
    backgroundColor: "#00BAC5"
  },
  subCategoriesListDisabled: {
    shadowColor: "#7C7F80",
    backgroundColor: "#7C7F80"
  },
  subCategoriesListText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default styles;
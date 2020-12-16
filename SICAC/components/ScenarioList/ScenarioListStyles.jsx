import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flexShrink: 1,
    marginTop: 0,
  },
  card: {
    flexGrow: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    fontSize: 12,
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
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
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
    fontSize: 16,
    color: "#00BAC5",
    fontWeight: "bold",
    alignSelf: "center",
  },
  floatingButton: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
  }
});

export default styles;
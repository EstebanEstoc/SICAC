import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";

<<<<<<< HEAD
import Actions from "./components/Actions/Actions";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="New scenario" component={Actions} />
      </Stack.Navigator>
    </NavigationContainer>
=======
import Root from "./components/Root";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root></Root>
      </PersistGate>
    </Provider>
>>>>>>> main
  );
};

export default App;

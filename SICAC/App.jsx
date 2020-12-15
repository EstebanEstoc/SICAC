import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store/store";

import Root from "./components/Root";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root></Root>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { Home } from './components';


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider >
);

export default App;

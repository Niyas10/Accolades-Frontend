import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./reduxStore/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

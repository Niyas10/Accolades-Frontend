import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import AdminReducer from "./slice/adminSlice.js";

const persistConfiq = { key: "root", storage, version: 1 };
const reducer = combineReducers({
  AdminReducer,
});

const persistedReducer = persistReducer(persistConfiq, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

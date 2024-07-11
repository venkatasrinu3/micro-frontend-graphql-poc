import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootreducer } from "./rootreducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["loginState", "usersState"]
}

const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);
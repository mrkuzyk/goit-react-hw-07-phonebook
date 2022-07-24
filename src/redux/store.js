import { configureStore } from "@reduxjs/toolkit";
import { contactsApi} from './contactsSlice';
import { searchFilterReducer } from "./searchFilterSlice";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: searchFilterReducer,
    },

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        (contactsApi.middleware),
    ],
});

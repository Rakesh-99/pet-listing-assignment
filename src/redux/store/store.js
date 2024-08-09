import { configureStore, combineReducers } from '@reduxjs/toolkit';
import petSlice from '../slice/petsSlice';
import themeSlice from '../slice/themeSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';





const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducers = combineReducers({
    pets: petSlice,
    theme: themeSlice
});

const persistedReducers = persistReducer(persistConfig, reducers);



const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer/rootReducer'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
})

export const persistor = persistStore(store)

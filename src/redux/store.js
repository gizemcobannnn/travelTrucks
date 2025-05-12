import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import camperReducer from './campers/camperSlice';

const camperPersistConfig = {
  key: 'camper',
  storage,
  whitelist: ['campers','camper'], // sadece favorites'ı localStorage'da saklayacak
};

const persistedCamperReducer = persistReducer(camperPersistConfig, camperReducer);

export const store = configureStore({
  reducer: {
    camper: persistedCamperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
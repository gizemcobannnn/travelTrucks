import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import camperReducer from './campers/camperSlice';


const camperPersistConfig = {
  key: 'camper', // Bu alan sadece auth reducer için kullanılacak
  storage,
  whitelist: ['token','isLoggedIn'], // Sadece token alanını persist etmek istiyoruz
};

const persistedAuthReducer = persistReducer(camperPersistConfig, camperReducer);

export const store = configureStore({
  reducer: {
    camper: persistedAuthReducer, // auth reducer persist edilmiş haliyle atanıyor
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist ile ilgili action'ları kontrol dışı bırak
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export default store;
export let persistor = persistStore(store);

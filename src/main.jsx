import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

//    <Provider store={store}>
createRoot(document.getElementById('root')).render(
  <StrictMode>

      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>

  </StrictMode>,
)

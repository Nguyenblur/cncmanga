import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Provider from './state/Provider';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider>
          
            <GoogleOAuthProvider clientId="463998396748-6vosdragc3pk3bmhr4vhid7eke7m3u1c.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </Provider>
    // </React.StrictMode>
);
reportWebVitals();

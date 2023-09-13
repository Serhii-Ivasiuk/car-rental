// Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
// Components
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/car-rental">
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

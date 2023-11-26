import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { theme } from './utils/theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline/>
            <App />
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


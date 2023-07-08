import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/theme/index.css';
import '../src/theme/App.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/ThemeProvider';
import router from './routes';
import GlobalState from './context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalState>
        <RouterProvider router={router} />
      </GlobalState>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './utils/theme';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from 'utils/chakraTheme';

console.log(chakraTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      {/* <BrowserRouter> */}
      <ChakraProvider theme={chakraTheme}>
        {/* <ThemeProvider theme={theme}> */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
        {/* </ThemeProvider> */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

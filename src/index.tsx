import React from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import App from './App';

ReactDOM.render(
  <StyleProvider>
    <ThemePicker variant="light">
      <App />
    </ThemePicker>
  </StyleProvider>,
  document.getElementById('root')
);


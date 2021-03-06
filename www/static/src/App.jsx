/**
 * Created by Tywin on 16/5/26.
 */
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
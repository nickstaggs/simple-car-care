import * as React from 'react';
import { blueGrey, lime } from 'material-ui/colors';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createPalette from 'material-ui/styles/createPalette';
import NavBar from './NavBar';
import './App.css';

const myTheme = createMuiTheme({
  palette: createPalette({
    primary: blueGrey,
    secondary: lime,
  })
});

// const myTheme = createMuiTheme({
//   palette: {
//     type: 'dark', // Switching the dark mode on is a single property value change.
//   },
// });

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
          <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default App;

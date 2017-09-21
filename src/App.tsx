import * as React from 'react';
import { blueGrey, lime } from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createPalette from 'material-ui/styles/createPalette';
import NavBar from './NavBar';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blueGrey,
    secondary: lime,
  })
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default App;

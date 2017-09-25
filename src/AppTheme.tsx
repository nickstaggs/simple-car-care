import { createMuiTheme, Theme } from 'material-ui/styles';
import { blueGrey, lime } from 'material-ui/colors';

let AppTheme: Theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lime,
  }
});

export default AppTheme;

import * as React from 'react';
import AppTheme from './AppTheme';
import  withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { StyleRules } from 'material-ui/styles';

let styles: StyleRules = {
    root: {
      width: '100%',
      marginTop: '.5em',
      backgroundColor: AppTheme.palette.secondary,
      display: 'flex'
    },
    paper: {
      flex: '1 1 auto',
      // flexDirection: 'column',
      overflow: 'auto'
    },
};

function MainScreen(props: any) {
  const classes = props.classes;

  return (
      <Paper className={classes.paper}/>
  );
}

export default withStyles(styles)(MainScreen);

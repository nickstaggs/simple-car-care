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
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      margin: '.5em',
    },
};

function MainScreen(props: any) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(MainScreen);

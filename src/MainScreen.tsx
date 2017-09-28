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
      flex: '0 1 auto',
      // flexDirection: 'column',
      // backgroundImage: 'https://1.bp.blogspot.com/-99pieC0AEHE/Wa98U2vQnoI/AAAAAAAApdE/3YOPLxiPtR4p2XJlFfmRv7PTwrlrUpzegCLcBGAs/s1600/COTA%2B12.jpg',
      // overflow: 'auto'
    },
};

function MainScreen(props: any) {
  const classes = props.classes;

  return (
      <Paper className={classes.paper}>
        <img src='https://1.bp.blogspot.com/-99pieC0AEHE/Wa98U2vQnoI/AAAAAAAApdE/3YOPLxiPtR4p2XJlFfmRv7PTwrlrUpzegCLcBGAs/s1600/COTA%2B12.jpg' alt='car being worked on' />
      </Paper>
  );
}

export default withStyles(styles)(MainScreen);

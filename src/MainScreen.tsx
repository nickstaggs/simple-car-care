import * as React from 'react';
// import AppTheme from './AppTheme';
import  withStyles from 'material-ui/styles/withStyles';
import { Paper, Grid } from 'material-ui';

import { StyleRules } from 'material-ui/styles';

let styles: StyleRules = {
    root: {
      flex: '0 1 auto',
      marginTop: '.5em',
      overflow: 'hidden',
      height: '91vh',
      // flexDirection: 'column',
      // overflow: 'auto'
    },
    img : {
      marginTop: '-70em',
      maxWidth: '100%',
      zIndex: -1
    },
    whiteOverlay: {
      zIndex: 1,
      display: 'block',
      position: 'relative',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    paper: {
      zIndex: 2,
      textAlign: 'center'
    },
    grid: {
      height: '100%',
      margin: 0
    }
};

function MainScreen(props: any) {
  const classes = props.classes;

  return (
      <Paper className={classes.root} elevation={4}>
        <div className={classes.whiteOverlay}>
          <Grid container={true} align="center" justify="center">
            <Grid item={true} xs={12} md={6} lg={4}>
              <Paper className={classes.paper}>
                <h2>Automobile care and maintenance are simpler than you think!</h2>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <img src="https://goo.gl/QRxgd1" alt="car being worked on" className={classes.img} />
      </Paper>
  );
}

export default withStyles(styles)(MainScreen);

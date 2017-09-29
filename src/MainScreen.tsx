import * as React from 'react';
import  withStyles from 'material-ui/styles/withStyles';
import { Paper, Grid } from 'material-ui';
import { StyleRules } from 'material-ui/styles';

let styles: StyleRules = {
    root: {
      display: 'flex',
      flex: '1 1 auto',
      marginTop: '.5em',
      overflow: 'hidden',
      background: 'url(https://goo.gl/QRxgd1) 50% 50%'
    },
    img : {
      maxWidth: '100%',
      zIndex: -1
    },
    whiteOverlay: {
      zIndex: 1,
      display: 'flex',
      flex: '1 1 auto',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    paper: {
      zIndex: 2,
      textAlign: 'center'
    },
};

function MainScreen(props: any) {
  const classes = props.classes;

  return (
      <Paper className={classes.root} elevation={5}>
        <div className={classes.whiteOverlay}>
          <Grid
            container={true}
            align="center"
            justify="center"
          >
            <Grid item={true} xs={10} md={6} lg={4}>
              <Paper className={classes.paper} elevation={5}>
                <h2>Automobile care and maintenance are more simple than you think!</h2>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Paper>
  );
}

export default withStyles(styles)(MainScreen);

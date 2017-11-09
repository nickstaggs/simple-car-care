import * as React from 'react';
import { StyleRules } from 'material-ui/styles';
import  withStyles from 'material-ui/styles/withStyles';
import { Paper, Grid } from 'material-ui';

let styles: StyleRules = {
    root: {
      display: 'flex',
      flex: '1 1 auto',
    }
};

const Make = (props: any) => {
  let classes = props.classes;
  return (
    <Paper className={classes.root} elevation={5}>
      <div className={classes.whiteOverlay}>
        <Grid
          container={true}
          align="center"
          justify="center"
        >
          <Grid item={true} xs={10} md={6} lg={4}>
            <Paper className={classes.paper} elevation={0}>
              <h2>Automobile care and maintenance are more simple than you think!</h2>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Make);

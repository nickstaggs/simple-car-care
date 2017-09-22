import * as React from 'react';
// import * as PropTypes from 'prop-types';
import SelectCar from './SelectCar/SelectCar';
import { Make } from './SelectCar/Make';
import  withStyles from 'material-ui/styles/withStyles';
// import { StyleRules } from 'material-ui/styles/withStyles';
// import withTheme from 'material-ui/styles/withTheme';
import Paper from 'material-ui/Paper';
import { Theme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { createMuiTheme } from 'material-ui/styles';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.primary,
  },
  paper: {
    flexGrow: 1,
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    flexGrow: 1,
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

let myTheme: Theme = createMuiTheme();

let sampleMakes: Make[] = [{id: 0, name: 'Select Make'}, {id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

let NavBar = (props: any) => (
  <Grid container={true} spacing={24}>
    <Paper className={props.classes.paper}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={6}>
          <Paper className={props.classes.logo}>
            <h1>Simple Car Care</h1>
          </Paper>
        </Grid>
        <Grid item={true} xs={6}>
          <SelectCar makes={sampleMakes} className="Select-car"  />
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

export default withStyles(styles(myTheme))(NavBar);

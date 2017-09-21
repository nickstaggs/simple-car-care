import * as React from 'react';
// import * as PropTypes from 'prop-types';
import SelectCar from './SelectCar/SelectCar';
import { Make } from './SelectCar/Make';
import  withStyles from 'material-ui/styles/withStyles';
// import { StyleRules } from 'material-ui/styles/withStyles';
// import withTheme from 'material-ui/styles/withTheme';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { Theme } from 'material-ui/styles/createMuiTheme';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.primary,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

let sampleMakes: Make[] = [{id: 0, name: 'Select Make'}, {id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

function NavBar(props: any) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24} classes={classes.root} >
        <Grid item={true} xs={6}>
          <h1>Simple Car Care</h1>
        </Grid>
        <Grid item={true} xs={6}>
          <SelectCar makes={sampleMakes} className="Select-car"  />
        </Grid>
      </Grid>
    </div>
  );
}

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NavBar);

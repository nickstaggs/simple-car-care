import * as React from 'react';
import AppTheme from '../AppTheme';
import SelectCar from '../SelectCar/SelectCar';
import { Make } from '../SelectCar/Make';
import  withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { StyleRules } from 'material-ui/styles';

let styles: StyleRules = {
    root: {
      width: '100%',
      marginTop: 0,
      backgroundColor: 'black',
      flex: '0 1 auto'
    },
    flex: {
      flex: 1,
    },
};

let sampleMakes: Make[] = [{id: 0, name: 'Select Make'}, {id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

function NavBar(props: any) {
  console.log(AppTheme);
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Simple Car Care
          </Typography>
          <SelectCar makes={sampleMakes} className={classes.selectCar}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);

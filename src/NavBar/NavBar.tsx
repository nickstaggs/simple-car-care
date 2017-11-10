import * as React from 'react';
import SelectCar from '../SelectCar/SelectCar';
import { Make } from '../SelectCar/Make';
import  withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { StyleRules } from 'material-ui/styles';
import { Link } from 'react-router-dom';

let styles: StyleRules = {
    root: {
      width: '100%',
      marginTop: 0,
      backgroundColor: 'black',
      flex: '0 1 auto',
      textDecoration: 'none'
    },
    flex : {
      flex: 1
    },
    title: {
      color: 'white !important',
      active: 'false',
      textDecoration: 'none'
    },
};

let sampleMakes: Make[] = [{id: 0, name: 'Select Make'}, {id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

function NavBar(props: any) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography type="title" className={classes.flex}>
            <Link to="/" className={classes.title}>Simple Car Care</Link>
          </Typography>
          <SelectCar makes={sampleMakes}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);

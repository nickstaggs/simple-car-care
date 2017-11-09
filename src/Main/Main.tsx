import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import { StyleRules } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import Make from '../Make/Make';

let styles: StyleRules = {
    root: {
      display: 'flex',
      flex: '1 1 auto',
    }
};

const Main = (props: any) => {
  let classes = props.classes;
  return (
    <main className={classes.root}>
      <Switch>
        <Route exact={true} path="/" component={MainScreen}/>
        <Route path="/:make" component={Make}/>
      </Switch>
    </main>
  );
};

export default withStyles(styles)(Main);

import * as React from 'react';
import { Make } from './Make';
import { Link } from 'react-router-dom';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import  withStyles from 'material-ui/styles/withStyles';
import { StyleRules } from 'material-ui/styles';

let styles: StyleRules = {
    root: {
      color: 'white',
      backgroundColor: 'grey'
    },
    flex: {
      flex: 1,
    },
};

const ITEM_HEIGHT = 48;

class SelectCar extends React.Component<any> {

  state = {
    open: false
  };

  handleClick = (event: any) => {
    this.setState({ open: true });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {

    const makes = this.props.makes;
    const classes = this.props.classes;

    return (
      <div>
      <Button
        aria-owns={this.state.open ? 'long-menu' : null}
        aria-haspopup={true}
        onClick={this.handleClick}
        className={classes.root}
      >
        Open Menu
      </Button>
        <Menu
          id="long-menu"
          // anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {makes.map((make: Make) => (
            <Link to={`/${make.name}`}>
              <MenuItem key={make.id.toString()} onClick={this.handleRequestClose}>
                {make.name}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SelectCar);

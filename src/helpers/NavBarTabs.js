import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavBarTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Link to="/"><Tab label="Home"/></Link>
            <Link to="/who_we_are"><Tab label="Who We Are" /></Link>
            <Link to="/what_we_do"><Tab label="What We Do" /></Link>
            <Link to="/why_we_do"><Tab label="Why We Do" /></Link>
            <Link to="/donate"><Tab label="Donate" /></Link>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

NavBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarTabs);
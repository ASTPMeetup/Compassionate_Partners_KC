import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  }
};

class NavBarTabs extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="fixed" color="default">
          <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary"
          textColor="primary" centered>
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

export default NavBarTabs;
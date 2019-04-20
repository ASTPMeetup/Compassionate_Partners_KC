import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from '../assets/img/logo.png';

const styles = {
  root: {
    flexGrow: 1
  },
  logo: {
    position: "fixed",
    maxHeight: "30px",
    right: "20px",
    top: "10px"
  }
};

class NavBarTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleHomeClick = () => {
    this.props.history.push('/');
  };

  handlWhoTabClick = () => {
    this.props.history.push('/who_we_are');
  };

  handleWhatTabClick = () => {
    this.props.history.push('/what_we_do');
  };

  handleWhyTabClick = () => {
    this.props.history.push('/why_we_do');
  };

  handleDonateTabClick = () => {
    this.props.history.push('/donate');
  };

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="fixed" color="default">
          
            <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary"
              textColor="primary">
              <Tab label="Home" onClick={this.handleHomeClick}/>
              <Tab label="Who We Are" onClick={this.handlWhoTabClick}/>
              <Tab label="What We Do" onClick={this.handleWhatTabClick}/>
              <Tab label="Why We Do" onClick={this.handleWhyTabClick}/>
              <Tab label="Donate" onClick={this.handleDonateTabClick}/>
            </Tabs>
            <div className="logo-wrapper">
              <img src={Logo} style={styles.logo} alt="logo"/>
            </div>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(NavBarTabs);
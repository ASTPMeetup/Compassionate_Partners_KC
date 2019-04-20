import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../assets/img/logo.png';
import FacebookIcon from '../assets/img/facebook.svg';
import InstagramIcon from '../assets/img/instagram.svg';

const styles = {
  root: {
    flexGrow: 1
  },
  logo: {
    position: "fixed",
    maxHeight: "30px",
    right: "20px",
    top: "10px"
  },
  facebookIcon: {
    position: "fixed",
    maxHeight: "30px",
    maxWidth: "26px",
    right: "65px",
    top: "12px"
  },
  instagramIcon: {
    position: "fixed",
    maxHeight: "26px",
    maxWidth: "30px",
    right: "105px",
    top: "12px"
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
              <Link to="/">
                <img src={Logo} style={styles.logo} alt="logo"/>
              </Link>
              <a href="https://www.facebook.com/CPKC.LOVE" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} style={styles.facebookIcon} alt="facebook logo"/>
              </a>
              <a href="https://www.instagram.com/cpkc.love" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} style={styles.instagramIcon} alt="instagram logo"/>
              </a>
            </div>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(NavBarTabs);
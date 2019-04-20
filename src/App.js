import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarTabs from './helpers/NavBarTabs';
import WhoWeArePage from './WhoWeArePage';
import HomePage from './HomePage';
import DonatePage from './DonatePage';
import WhatWeDoPage from './WhatWeDoPage';
import WhyWeDoPage from './WhyWeDoPage';
import FooterBar from './components/FooterBar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarTabs />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/who_we_are" component={WhoWeArePage} />
          <Route path="/what_we_do" component={WhatWeDoPage} />
          <Route path="/why_we_do" component={WhyWeDoPage} />
          <Route path="/donate" component={DonatePage} />
        </Switch>
        <br/>
        <FooterBar/>
      </div>
    );
  }
}

export default App;

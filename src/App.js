import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MultiGridContainer from './components/containers/MultiGridContainer';
import TextCenterContainer from './components/containers/TextCenterContainer';
import './App.scss';

import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }
  componentDidMount() {
    let projectUrl = 'http://s734634495.onlinehome.us/wp-json';
    fetch(projectUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          project: response
        });
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div class="page-wrapper">
          <TextCenterContainer description="Hello world!" />
          <MultiGridContainer description="Container One" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

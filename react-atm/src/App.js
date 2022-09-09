import React, { Component } from 'react';
import logo from './ga.png';
import Account from './Account';

//this is the middle level of the application, child to index.js
class App extends Component {
  render() {
    return ( //we add basic page info and then create two sub-components for checking and saving accounts within the App component
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name={"Checking"} /> 
        <Account name={"Savings"} />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;

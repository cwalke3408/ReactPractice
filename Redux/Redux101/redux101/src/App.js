import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home.js';
import Button from './Components/button.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      homeText: "Home Page"
    }
  }

  updateHome(){
    this.setState({
      homeText: "User clicked button"
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        

        <Home text={this.state.homeText}/>
        <Button updateFunction={()=>{this.updateHome()}} />
      </div>
    );
  }
}

export default App;

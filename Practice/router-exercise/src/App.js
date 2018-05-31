import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Atlanta from './Atlanta';
import Image from './Images';
import Mayor from './MayorMessage';
import BootstrapNavBar from './BootstrapNavBar.js'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <h1>Main App</h1>

          {/* <Route exact path="/" component={Home}/> */}

          <Route exact path="/" render={()=>{return(<Home />)}}/>
          <Route path="/about" render={()=>{return(<About />)}}/>
				  <Route path="/atlanta" render={()=>{return(<Atlanta />)}}/>
				  <Route path="/images" render={()=>{return(<Image atlImage={atlImages}/>)}}/>
				  <Route path="/mayor" render={()=>{return(<Mayor />)}}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

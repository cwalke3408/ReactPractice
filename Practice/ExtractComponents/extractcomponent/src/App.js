
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Avatar extends React.Component{

  render(){
    return(
      <div>
        <h3> Avatar </h3>
      </div>
    );
  }
}

class UserInfo extends React.Component{ 

  constructor(props){
    super(props);

  }

  render(){
    return(
        <div className="userInfo">
          <h2> {this.props.userName}</h2>
          <h3> {this.props.userLastLogin}</h3>
        </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);

    console.log(this.props.data[0].date);
  }

  render() {
    return (
      <div className="App">
        <div className="avatar">
          <img alt="" src={this.props.data[0].author.avatarUrl} />
        </div>


        <UserInfo 
          userName={this.props.data[0].author.name} 
          userLastLogin={this.props.data[0].date} 
        />
      </div>
    );
  }
}

export default App;
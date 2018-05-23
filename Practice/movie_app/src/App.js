import React, { Component } from 'react';
import logo from './logo.svg';
import lebron from './lebronCrying.jpg';
import './App.css';
import $ from "jquery";
import Poster from "./Poster.js";
import SearchBar from "./SearchBar.js";
import About from "./About.js";
import MovieSearch from "./MovieSearch.js";
import SingleMovie from "./SingleMovie";
import BootstrapNavBar from "./BootstrapNavBar";
import Login from './Login';
import Register from './Register';

// add react router
// BrowserRouter as Router in the MAIN component in our app now
// Link is the new <a href="">

//Router is the master Mind
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {

  constructor(props){
    // call super in order to pass up to React.Component
    // whatever it needs
    // We call super, So the parent will know whatever we send up
    super(props);

    // After super, we can use the word "this"
    this.state ={ 
      moviePosters: []
    }

    // if we want to use the current "this" inside of any method,
    // we need to "bind" the current this, using the bind method
    this.newUserSearch = this.newUserSearch.bind(this);
  }

  // special lifcycle method
  // will run as soon as the FIRST render runs
  // this is where AJAX goes
  // Keeps the component from rendering until the AJAX request is completed

  componentDidMount(){
    console.log("The component has mounted!");
    const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url,(data)=>{
      console.log(data.results);
      this.setState({
        moviePosters: data.results
      });
    })
  }

  newUserSearch(movieTitle){
    console.log("MovieTitle: " + movieTitle);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`;
    $.getJSON(url, (movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      });
    });
  }

  // componentWillReceiveProps(newProps){
  //   console.log(newProps);
  //   const newSearchTerm = newProps.match.params.searchTerm;
  // }

  render() {
    const posters = this.state.moviePosters.map((poster,index)=>{
      const imagePath = `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
      return(<Poster name="Snoppy" movie={poster} poster1={imagePath} />)
    });

    return (
      // ROUTER GOES AROUND EVERYTHING
      <Router>
        <div className="App">

          {/* <ul>
            Have to use Link
            <li><Link to="/search"> Search  </Link></li>
            <li><Link to="/"> Home  </Link></li>
            <li><Link to="/about"> About </Link></li>
          </ul> */}

          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={lebron} className="App-logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> */}

          {/* <SearchBar searchFunction={this.newUserSearch}/> */}

          <Route path="/" component={BootstrapNavBar} />
          <Route path="/" component={SearchBar} />
          <Route path="/about" render={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          {/* You don't always have to give it a component
          You can give it a callback which can render components*/}
 
          {/* Exact to specify exactly "/" instead any URL has a "/" */}
          <Route exact path="/" render={()=>{
            return(<div>{posters}</div>)
          }}/>

          <Route path="/search/:movieId" component={MovieSearch} />

          <Route path="/movie/:movieId" component={SingleMovie} />

        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import axios from 'axios'

class SingleMovie extends Component{
    constructor(){
        super();

        this.state = {
            movie: {},
            buttonClass = "btn btn-primary"
        }
    }

    componentDidMount(){
        const mid = this.props.match.params.movieId;
        axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
        .then((movieData)=>{
            console.log(movieData);
            this.setState({
                movie: movieData.data
            })
        })
    }

    addFav(e){
        const movieId = this.props.match.params.movieId;
        const addFavorite = axios({
            method: 'POST',
            url: `http://localhost:3030/addFav`,
            data:{
                movieId,
                token: localStorage.getItem('token')
            }
        });

        addFavorite.then((favoriteResponse)=>{
            console.log(favoriteResponse.data);
            if(favoriteResponse.data.msg === 'favAdded'){
                this.setState({buttonClass:"btn btn-success"})
            } else if(favoriteResponse.data.msg === "badToken"){
                this.props.history.push('/login');
            }
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.movie.tagline}</h3>
                <button className="btn btn-primary" onClick={(e)=>this.addFav(e)} >Add to my Favorites </button>
            </div>
        )
    }
}

export default SingleMovie
import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // EVERY JS 'event' gets the event obj
    handleSubmit(event){
        event.preventDefault();
        const searchTerm = event.target[0].value;
        
        // this.props.searchFunction(searchTerm);
        // this.props.searchFunction.push(`/search/${searchTerm}`)
        this.props.history.push(`/search/${searchTerm}`)
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit} > 
                <input type="text" />
                <button className="btn btn-primary" type="submit"> Movie Search </button>
            </form>
        )
    }
}

export default SearchBar;
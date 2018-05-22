import React, { Component } from 'react';

class Poster extends Component{
	constructor(props){
		super(props);

	};

	render(){

		return(
			<div className="col-sm-3">
				<h3> {this.props.movie.title}</h3>
				<img src={this.props.poster} />
				<p>{this.props.movie.overview}</p>
			</div>
		)
	}
}

export default Poster;
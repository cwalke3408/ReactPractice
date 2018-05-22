import React, { Component } from 'react';

class Images extends React.Component{
	// Map through images
	constructor(props){
		super(props);

		// console.log(this.props.atlImage);
		
	}

	showImages(){

	}

	render(){

		const showImages = this.props.atlImage.map((image,index)=>{
			console.log(image);
			return(
				<img className="col-sm-6" src={image} alt=""/>
			)
		});

		return(
			<div>
			<p>Images go here as props</p>
			{/* <img src={this.props.atlImage[0]} />
			<img src={this.props.atlImage[1]} alt=""/> */}
				<div className="row">
					{showImages}
				</div>
			</div>
		)
	}
}

export default Images 
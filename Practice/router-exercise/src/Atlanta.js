import React, { Component } from 'react';
import $ from 'jquery';

class About extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon: weatherData.weather[0].icon,
				temp: weatherData.main.temp,
				temp_min: weatherData.main.temp_min,
				temp_max: weatherData.main.temp_max,
				desc: weatherData.weather[0].description
			})
		});
	}

	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>

				<img src={this.state.icon} />
				<h3>{this.state.temp}</h3>
				<h3>{this.state.temp_min}</h3>
				<h3>{this.state.temp_max}</h3>
				<h3>{this.state.desc}</h3>
			</div>
		);
	}
}

export default About;

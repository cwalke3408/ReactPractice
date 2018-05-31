import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();

        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(event){
        event.preventDefault();
        // axios.post(`http://localhost:3030/register`).then((registerData)=>{
        //     console.log(registerData);
        // });

        // Axios is how we make our AJAX requests
        // Is how React talks to Express/ Spring
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;
        console.log("password " +password);
        console.log("email " +email);

        const registerRequest = axios({
            method: "POST",
            url: "http://localhost:3030/register",
            data: {
                email,
                password
            }
        });

        registerRequest.then((registerData)=>{
            console.log("registerData: " + registerData);
            if(registerData.data.msg === "registerSuccess"){
                // localStorage is the new cookie
                // Cookies are inherently insecure. They also can only hold 4k.
                // They are sent in their entirety onEVERY request.
                // localStorage can hold 5mb, the data is NOT sent to the 
                // server (unless you tell it to).  localStorage is just a HashMap.

                localStorage.setItem('token',registerData.data.token);
                this.props.history.push('/');
            }
        })
    }

  render(){
    return(

	<form action="/action_page.php" onSubmit={(e)=>{this.handleRegister(e)}} >
	  <div className="form-group">
	    <label for="email">Email address:</label>
	    <input type="email" className="form-control" id="email" />
	  </div>
	  <div className="form-group">
	    <label for="pwd">Password:</label>
	    <input type="password" className="form-control" id="pwd" />
	  </div>
	  <div className="checkbox">
	    <label><input type="checkbox" /> Remember me</label>
	  </div>
	  <button type="submit" className="btn btn-default">Submit</button>
	</form>

    ) 
  }
}

export default Register;
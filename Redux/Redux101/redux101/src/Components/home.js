import React, {Component} from 'react';
// We need some glue!!!  
// This component needs to know about the store.
// Just because it's inside the Provider, isn't. 
// React-redux only exposes the store when it has to for performance
// To accomplish this, we use the connect method from react-redux
    //(the glue between React and Redux)
import { connect } from 'react-redux';

class Home extends Component{

    render(){
        return(
            <h1>{this.props.text}</h1>
        )
    }
}

// We have conect.  Great.  But we need a way to get the stuff in the store
// to map to the props of this Component.

// It takes one param: state
//    1. State 
//    ** THE STATE PARAMETER IS THE ROOT REDUCER
// This function will return an object, each property will be mapped 
// to this components props, each value will be a piece of state, or a 
// property of the rootreducer
function mapStateToProps(state){

    return{
        homeText: state.home
    }
}
// export default Home;
// Inside of containers (a fancy term for a component that knows about Redux),

// We don't export the component.  We export connect.  
// Connect is a functionand we pass that function mapStateToProps
// Connect RETURNS A FUNCTION, which expects the component
export default connect(mapStateToProps)(Home);
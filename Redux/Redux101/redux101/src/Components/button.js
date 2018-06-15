import React, {Component} from 'react';
import {connect} from 'react-redux';
import UpdateHome from '../actions/UpdateHome';

// This component job is to CHANGE redux state.
// It will need a function to do so.
// ONce the function runs, the dispatcher will let ALL reducers know.

// We need bindActionCreators from Redux so the action can dispatch to the reducers
import {bindActionCreators} from 'redux';

class Button extends Component{

    handleClick(){
        console.log("User Click");
        // Took updateHome
        this.props.updateHome();
    }

    render(){
        return(
            <button onClick={()=>{this.handleClick()}} className="btn btn-success"> Click this</button>
        )
    }
}

// GET DATA FROM REDUX
function mapStateToProps(state){
    return {}
}


// UPDATE REDUX BY A FUNCTION
// mapDispatchToProps takes whatever function that need to be sent out to the dispatcher,
//      and makes them into props for this component
function mapDispatchToProps(dispatch){
    // bindActionCreator takes  2 args:
    //     1. Objects, property of local prop name (this.props.whatever)
    //             value: the callback or ACTION 
    //     2. dispatcher 
    //         bindActionCreators({

    //         }, 
    //         dispatch)
    return bindActionCreators({
        updateHome: UpdateHome 
    },
    dispatch);


}

// export default Button
// dispatch function ALWAYS COMES SECOND

//  EXPORT CONNECT(null, mapStateToDispatch)(Button);
 export default connect(mapStateToProps, mapDispatchToProps)(Button);
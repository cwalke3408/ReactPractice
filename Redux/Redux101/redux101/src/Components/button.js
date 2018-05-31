import React, {Component} from 'react';

class Button extends Component{

    handleClick(){
        console.log("User Click");
        this.props.updateFunction();
    }

    render(){
        return(
            <button onClick={()=>{this.handleClick()}} className="btn btn-success"> Click this</button>
        )
    }
}

export default Button
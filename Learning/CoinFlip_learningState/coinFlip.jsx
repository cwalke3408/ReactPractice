
// pure function, aka, dumb function
// Given input X output Y *Always return the same thing
// aka Presentational Component. 
// function Coin(){
//     return(
//         <h1>Sanity Check</h1>
//     )
// }

// createClass is a helper function to help old browsers
// pretend to make classes.

// Classes are smart functions  
// They are not publicEncrypt. 
// They change their output, based on application State 
const RealCoin = React.createClass({
    sides: [
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
    ],

    getInitialState: function(){
        return{
            image: this.sides[0]
        }
    },

    // In here, we chage this.state.image
    // ANYTIME we change state, render will be called
    handleButtonClick(e){
        let newSide = 0;
        let randomSide = Math.round(Math.random());
        newSide = this.sides[randomSide];

// WE  NEVER EVER EVER EVER DO THIS:
// this.state.image = newSide
        this.setState({
            image: newSide
        })
    },

    render: function(){
        return(
            <div>
                <h1>Sanity Check!!!</h1>
                <button onClick={(e)=> this.handleButtonClick(e)}>Click To Flip</button>
                <img src={this.state.image} />
            </div>
        );
    }
});

ReactDOM.render(
    <RealCoin />,
    document.getElementById('root')
);
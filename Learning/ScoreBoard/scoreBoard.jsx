// React is a bunch of legos.  The legos are called componets.
// A component is a fancy name for a class-like UI thing.

const Counter = React.createClass({
    getInitialState: function(){
        return{
            score: 0
        }
    },

    onAddPoint : function(){
        this.setState({
            score: this.state.score + 1
        });
    },
    onSubPoint : function(){
        this.setState({
            score: this.state.score - 1
        })
    },

    render: function(){
        return(
            <div className="counter">
                <button className="btn btn-success" onClick={(e)=>this.onAddPoint(e)}>+</button>
                <div className="team-score">{this.state.score}</div>
                <button className="btn btn-danger" onClick={(e)=>this.onSubPoint(e)}>-</button>
            </div>
        );
    }
})

// React components are automatically passed 1 param. PROPS
function Team(props){
    console.log(props);
    return(
        <div className={"team" + props.teamName}>
            <div className="team">
                <h3>{props.teamName}</h3>
            </div>
            <Counter />
        </div>
    );
}


// A component is REGULAR JAVASCRIPT UNTIL you get inside
// the return... once inside, you are writing JSX
function ScoreBoard(){
    // ScoreBoard is going to return a piece of JSX.  Every 
    // React component MUST return a single DOM element.

    console.log("This Series is really over.\nJust tune in for the Comedy :) ")


    // id are rarly used because components are expected to
    // be used multiple times 
    return(
        <div>
            <div className="scoreBoard">
                <div className="header">
                    <h1>Celtics vs Cavs - Game 3</h1>
                </div>
            </div>
            <div className="teams">
                <Team teamName="Boston"/>
                <Team teamName="Cavs"/>
            </div>
        </div>
    );
}

// The render method 2 args:
// 1. What
// 2. Where
ReactDOM.render(
    <ScoreBoard />,
    document.getElementById('root')
);

// Babel converts JSX into JavaScript for the browser to read
// React is a bunch of legos.  The legos are called componets.
// A component is a fancy name for a class-like UI thing.

// React components are automatically passed 1 param. PROPS
function Team(props){
    console.log(props);
    return(
        <div className="team">
            <div className={"team-" + props.teamName}>
                <h3>{props.teamName}</h3>
            </div>
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
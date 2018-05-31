// This is our master Reducer File
// It doesn't manage any particular peice of state.
// It simply contains all the individual peices of state from each reducer 
// In other words.. a single reducer contains a single 
// objects/ piece of state, the root reducer contains all the reducers

// STATEMENT OF DECLARATION
// I, the rootReducer, neither know, nor give a rip about React.
// I am like Lichtentien.  I am independent of all 
// your stupid, silly empires (React, Angular, Vue).
// I only care about Redux.  Have a nice day.  --LeFlop

//import the combinReducers object from redux so that we can make a rootReducer out of them 
import {combineReducers} from 'redux';

// import each individual reducer.
import HomeReducer from './HomeReducer'; 

// Build the root reducer using combineReducers
// We got that thing from above. combineReducers takes 1 arg, an object.
//      1. Object
const rootReducer = combineReducers({
    home: HomeReducer
});

export default rootReducer;
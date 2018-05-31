import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

// Import the store from redux so React components can use it

import { createStore } from 'redux';

// We going to need the master-reducer and little-reducers
// We will make the reducers
// Import the rootReducer so the store has some data
import reducers from './reducers/index';


// Make a store for redux touse. Use createStore which we brought in above from redux.
// Pass createkStore the rootReducer which we just brought in as well.
// rootReducer is all of the little reducers in one place.
const theStore = createStore(reducers);

// HOORAY! WE HAVE A STORE WITH STUFF IN IT. WE OUT.
// We need a way to get the store to react.  The module for the job is react redux.
// React-Redux is theglue in between react and redux. 
// It's like the controller in between the model and the view.  

// React-redux gives us a component called Provider, 
// The provider component is around EVERYTHING taht needs the glue.

// We will still render the App componet.  BUT, we will render it inside of the Provider component.
// Provider component takes a prop of store which will be the Redux store we made above.
// The redux store was made by createStore and handing it the rootReducer
ReactDOM.render(

    <Provider store = {theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();

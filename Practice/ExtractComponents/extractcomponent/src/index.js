import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var data = [
    {
      author:{
        avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
        name:"neo"
      },
      commentHeading: "I am the One.",
      text: "Humanity, relax. I will save you.",
      date: "Today",
      userBadge: [ 
        'Superman',
        'Herald',
        'Engineer'
      ]
    },
    {
      author:{
        avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
        name:"Morpheus"
      },
      commentHeading: "There is no spoon.",
      text: "Don't htink you are. KNow you are.",
      date: "Two days ago",
      userBadge: [ 
        'The man',
        'Bard',
        'Samurai swordsman'
      ]
    }
  ]

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();


import React from 'react';          // which is the library that allows us to build React components.
import ReactDOM from 'react-dom';   // allows us to place our components and work with them in the context of the DOM
import App from './App';            // the App.js :)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

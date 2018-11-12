import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from './App';

//why it is not Wrapper to be rendered?
//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Wrapper />, document.getElementById('app'));

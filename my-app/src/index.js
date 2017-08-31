import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
// import App from './components/PrivateRoute';
import App from './components/flux'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

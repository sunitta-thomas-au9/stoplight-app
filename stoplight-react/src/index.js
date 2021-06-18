import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const  Link = process.env.REACT_APP_LINK;

ReactDOM.render(
  <React.StrictMode>
    <App url= {Link}/>
  </React.StrictMode>,
  document.getElementById('root')
);


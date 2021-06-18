import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const  Link = process.env.REACT_APP_LINK;
const  Link = 'https://raw.githubusercontent.com/databrary/mock-server/master/samples/PetStore.yaml'

ReactDOM.render(
    <React.StrictMode>
      <App url= {Link}/>
    </React.StrictMode>,
    document.getElementById('react-root')
  );
  
  
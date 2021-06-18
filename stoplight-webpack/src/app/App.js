import React from 'react';

import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';


function App(props) {
  console.log(props.url)  
    if(props.url) {
      return (
        <div className="App">
        <API
          apiDescriptionUrl={props.url}
          layout="traditional"
          router="history"
        />
        <p>Test{props.url}</p>
      </div>
    );

    }
   
}

export default App;
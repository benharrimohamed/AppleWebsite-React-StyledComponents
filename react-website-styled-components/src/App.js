import React from 'react';
import {NavBar} from './components'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './gStyles'
function App() {
  return (
    <React.Fragment>
      <Router>
       <GlobalStyle />
       <NavBar />
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import {
  NavBar,
  LandingSection
} from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GlobalStyle from './gStyles'

import {Home} from './pages/HomePage/Home'
function App() {
  return (
    <React.Fragment>
      <Router>
       <GlobalStyle />
       <NavBar />
       <Switch>
         <Route path='/' exact component={Home}/>
       </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import {
  NavBar,
  LandingSection
} from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GlobalStyle from './gStyles'
import {Home} from './pages/HomePage/Home'
import {Technologie} from './pages/TechnologiePage/Technologie'

const App = () => {
  return (
    <React.Fragment>
      <Router>
       <GlobalStyle />
       <NavBar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/technologie' exact component={Technologie}/>
       </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Meeting2 from './pages/Meeting2';
import{
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

export default function App() {
  return(
    <React.Fragment>
      <Router>
      <div>
        <Switch>
          <Route path="/"exact>
            <Home />

          </Route>
          <Route path="/Meeting2">
            <Meeting2 />

          </Route>

        </Switch>
        </div>
        </Router>
        </React.Fragment>
  )
}
   
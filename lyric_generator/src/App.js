import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Gifs from './components/Gifs';
import Footer from './components/Footer';
import './App.css';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className = 'pageContainer'>
      <Router>
        <div>
        <Navigation />
        <Search/>
            <nav>
              <ul>
                <li>
                <Link className = "trends" to = "/Gifs"> TRENDING GIFS </Link>
                </li>
              </ul>
              <ul>
                <li>
                <Link className = "trends" to = "/Instructions"> INSTRUCTIONS </Link>
                </li>
              </ul>
            </nav> 


        <Switch>
          <Route path = "/Gifs" component = {Gifs} />
          <Route path = "/Instructions" component = {Instructions} />
        </Switch>
       </div>

      </Router>
    <Footer />
    </div>
  )
}

export default App;

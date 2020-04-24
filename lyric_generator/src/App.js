import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div id="app">
        <nav className="navBar">LYRIC GENERATOR</nav>
        <Search />
      </div>
      </Router>
     );
   }
}

export default App;

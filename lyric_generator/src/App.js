import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

const API_KEY = "";

class App extends Component {
  getGif = async (e) => {
    const gifName = e.target.elements.gifName.value;
    e.preventDefault();
    const api_call = await fetch ();
  render() {
    return (
      <Router>
      <div id="app">
        <nav className="navBar">GIF GENERATOR</nav>
        <Search />
      </div>
      </Router>
     );
   }
}

export default App;

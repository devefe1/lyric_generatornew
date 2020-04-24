import React,{Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="app">
        <nav className="navBar">LYRIC GENERATOR</nav>
        <Search />
      </div>
     );
   }
}

export default App;

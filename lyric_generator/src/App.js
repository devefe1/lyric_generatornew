import React,{Component} from 'react';
import './components/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <nav className="navBar">LYRIC GENERATOR</nav>
          <div className="search">
                  <form className="searchform">
                      <input className="searchbar" type="text" />
                      <button className="searchbutton" type="submit">Search</button>
                  </form>
              </div> 
      </div>
    );
   }
}

export default App;

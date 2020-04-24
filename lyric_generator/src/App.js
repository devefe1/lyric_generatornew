import React,{Component} from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  getLyrics = (e) => {
    const searchBar = e.target.elements.searchBar.value;
    e.preventDefault();
    console.log(searchBar);
  }
  
  render() {
    return (
      <div id="app">
        <nav className="navBar">LYRIC GENERATOR</nav>
        <Search getLyrics={this.getLyrics} />
      </div>
     );
   }
}

export default App;

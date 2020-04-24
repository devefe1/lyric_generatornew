import React,{Component} from 'react';
import Search from './components/Search';
import './App.css';

const Api_Key = "6fef0c97f8msh9ff84b83e67846cp195e8ajsnb541264b0f03"

class App extends Component {
  getLyrics = (e) => {
    const searchBar = e.target.elements.searchBar.value;
    e.preventDefault();
    const api_call = "https://genius.p.rapidapi.com/search?key=&q=Kendrick%20Lamar"
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

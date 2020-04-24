import React,{Component} from 'react';
import Search from './components/Search';
import './App.css';


class App extends Component {
  getLyrics = async (e) => {
    const searchBar = e.target.elements.searchBar.value;
    e.preventDefault();
    const api_call = await fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "6fef0c97f8msh9ff84b83e67846cp195e8ajsnb541264b0f03"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
    
    const data = await api_call.json();
    console.log(data)

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

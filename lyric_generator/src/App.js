import React,{Component} from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  getLyrics() {
    console.log("working!");
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

import React,{Component} from 'react';
import {}
import Search from './components/Search';
import './App.css';


class App extends Component {
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

import React,{Component} from 'react';
import Search from './components/Search';
import './App.css';

const API_KEY = "D51KB0RSHL0B";

class App extends Component {
  getGif = async (e) => {
    const gifName = e.target.elements.gifName.value;
    e.preventDefault();
    const api_call = await fetch (`https://api.tenor.com/v1/search?q=atl&key=${API_KEY}&limit=5`);
    
    const data = await api_call.json();
    console.log(data);
  };

    render() {
      return (
        <div id="app">
          <nav className="navBar">GIF GENERATOR</nav>
          <Search />
        </div>
      );
    }; 
};

export default App;

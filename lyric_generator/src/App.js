import React,{Component} from 'react';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

// const API_KEY = 'D51KB0RSHL0B';
// const Url = 'https://api.tenor.com/v1/search?q=atl&key=D51KB0RSHL0B&limit=5'

class App extends Component {
  constructor(props) {
    super(props);
    
  }
    state = {
      gifs : "",
      gifList: "",
      url:"",
      weburl:"",
      value: ""
    }

    onChangeHandler = (e) => {
      console.log(e.target.value);
      this.getGifs(e.target.value);
      this.setState({value: e.target.value.toLowerCase()})

  }
// Used an onChangeHandler to update the value getting typed into the search bar

componentDidMount() {
  this.getGifs()
}  

  async getGifs (value) {
    try {
      const grabData = await axios.get (`https://api.tenor.com/v1/search?q=${value}&key=D51KB0RSHL0B&limit=5`)
      
      // console.log(grabData.data.results[0]);
      this.setState({
        gifs: grabData.data.results[0].media.url,
        gifs1: grabData.data.results[1],
        gifs2: grabData.data.results[2],
        gifs3: grabData.data.results[3]
      })
      
    } catch(error) {
      console.error(error)
    }
  }

    render() {
      return (
        <div id="app">
          <nav className="navBar">GIF GENERATOR</nav>
          {/* <Search /> */}
          
          <form className="searchform">
            <input value= {this.state.value} onChange={e => this.onChangeHandler(e)} className="searchbar" type="text" placeholder="Search for a gif here! " />
            <button className="searchbutton" type="submit">Search</button>
            
            <img alt="" src={this.state.gifs}></img>
        </form>
        </div>
      )
    }
};

export default App;

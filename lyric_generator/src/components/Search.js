import React,{Component} from 'react';
import axios from 'axios';

// const API_KEY = 'D51KB0RSHL0B';

class Search extends Component {
  constructor(props) {
    super(props);
    
  }
    state = {
      gifs : "",
      gifList: "",
      url:"",
      weburl:"",
      value: "",
      gifsID:""
    }

    onChangeHandler = (e) => {
      console.log(e.target.value);
      this.getGifs(e.target.value);
      this.setState({value: e.target.value.toLowerCase()})

  }
// Used an onChangeHandler to update the value getting typed into the search bar
// http://localhost:3002/:id -- "/:id" req.params.id
// localhost:3000/4389130
componentDidMount() {
  this.getGifs()
}  

  async getGifs (value) {
    try {
      const grabData = await axios.get (`https://api.tenor.com/v1/search?q=${value}&key=D51KB0RSHL0B&limit=5`)
      


      console.log(grabData.data.results[0]);
      this.setState({
        gifs: grabData.data.results[0].media[0].gif.url,
        gifsID: grabData.data.results[0].id,
        gifs1: grabData.data.results[1].media[0].gif.url,
        gifsID1: grabData.data.results[1].id,
        gifs2: grabData.data.results[2].media[0].gif.url,
        gifsID2: grabData.data.results[2].id,
        gifs3: grabData.data.results[3].media[0].gif.url,
        gifsID3: grabData.data.results[3].id,
      })
      
    } catch(error) {
      console.error(error)
    }
  }

    render() {
      return (
        <div className="app">
         
          <form className="searchform">
            <input value= {this.state.value} onChange={e => this.onChangeHandler(e)} className="searchbar" type="text" placeholder="Search for a gif here! " />
          </form>

          <div className="renderContainer">
            
          <a href={this.state.gifsID}>
            <img className="sameSize"  src={this.state.gifs} ></img>
        </a>
         <a href={this.state.gifsID1}>
            <img className="sameSize" src={this.state.gifs1} ></img>
        </a>
        <a href={this.state.gifsID2}>
            <img className="sameSize" src={this.state.gifs2} ></img>
        </a>     
         <a href={this.state.gifsID3}>
            <img className="sameSize" src={this.state.gifs3} ></img>
        </a>

          </div>

        </div>
      )
    }
};

export default Search;

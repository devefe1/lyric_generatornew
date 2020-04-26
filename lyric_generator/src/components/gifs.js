import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


// const API_KEY = 'D51KB0RSHL0B';

class Gifs extends Component {
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

    
  

componentDidMount() {
  this.getGifs()
}  

  async getGifs (value) {
    try {
      const grabData = await axios.get (`https://api.tenor.com/v1/trending?&key=D51KB0RSHL0B&limit=5`)
      

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
        <div className="apps">
            
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

      <NavLink className = "homeButton" to= "/App"> Back to Home </NavLink>
        </div> 
         </div>
      )
    }
};

export default Gifs;

import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
            <div className = "instructions" >
                <h2 className = "centerInstructions" >How this Works</h2>
                    <div className = "steps">
                       <ul>
                           <li> 1. Open Page </li>
                           <li> 2. Type in a gif description in search Bar</li>
                           <li> 3. Renders results</li>
                           <li> Bottom of the Page you can see the Trending Gifs for today. </li>
                       </ul>
                </div>
            </div>
        )
    }
}

export default Instructions;
import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
            <div className = "instructions" >
                <h3 className = "centerInstructions" >HOW THIS WORKS</h3>
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
import React from 'react';
// import Grid from './Grid.js';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  
render() {
    return (
      <div>
      {this.props.data.map((x,i)=>(
       <HornedBeast
        title = {x.title}
        image_url = {x.image_url}
        desc = {x.description}
          
      /> 
      ))}
      </div>
    )
  }
}

export default Main;
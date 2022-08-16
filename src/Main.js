import React from 'react';
import Grid from './Grid.js';

class Main extends React.Component {
  
  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Grid/>
      </div>
    )
  }

}

export default Main;
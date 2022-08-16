import React from 'react';
import HornedBeast from './HornedBeast.js';

class Row extends React.Component {

  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <HornedBeast name="Item A" />
      </div>
    )
  }
}

export default Row;
import React from 'react';
import Row from './Row.js';

class Grid extends React.Component {

  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <section className="grid">
        <Row />
        <Row />
      </section>
    )
  }

}

export default Grid;
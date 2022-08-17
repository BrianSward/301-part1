import React from 'react';

class Header extends React.Component {

  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Super Fun Title Action Time</h1>
        <p>Click on the hearts to Like</p>
      </header>
    );
  }

}

export default Header;
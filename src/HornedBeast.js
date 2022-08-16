import React from 'react';

class HornedBeast extends React.Component {
  
  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <title>Horned Beast</title>
        <img src="https://via.placeholder.com/140x100" alt="placeholder" width="140" height="100"/>
        <p>Description: A Horned Beast</p>        
      </div>
    )
  }

}

export default HornedBeast;
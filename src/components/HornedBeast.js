import React from 'react';

class HornedBeast extends React.Component {
  
  constructor( props ) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = (e) => {
    let nextState = {
      count: this.state.count+1
    }
    this.setState(nextState);
  }

  render() {
    return (
      <div className="item">
        <p>{this.props.title}</p>
        <img src={this.props.image_url} width="300" alt="" onClick = {this.props.onClick} />
        <p>{this.props.desc}</p>
        <p onClick = {this.increment}>❤️{this.state.count}</p>
      </div>
  )}

}

export default HornedBeast;
import React from "react";
import Count from './Count.js'

class Counter extends React.Component {
  constructor(props){
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
  
  render () {
    return (
      <div>
        <Count currentCount={this.state.count} />
      </div>
  )}
}
export default Counter;
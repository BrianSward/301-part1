import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beastData: data
      
    }
  }
  
  filterdata = (event)=>{
  let noOfHorns = event.target.value;
  if (noOfHorns === 'all'){
    this.setState({beastData: data})
  } else if (noOfHorns === 'many'){
    let filteredData = data.filter ((v)=> v.horns > 3)
    this.setState({beastData: filteredData})
  } else {
    let parsedNumberOfHorns = parseInt(noOfHorns);
    let filteredData = data.filter ((v,i)=> v.horns === parsedNumberOfHorns)
    this.setState({beastData: filteredData})
  };
  }

  render () {
    return (
      <div className="App">
      <Header />
      <Main data={this.state.beastData} handleFilter={this.filterdata}/>
      <Footer />
      </div>
    );
}
}

export default App;

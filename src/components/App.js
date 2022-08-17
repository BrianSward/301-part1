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
      data: data
      
    }
  }
  render () {
    return (
      <div className="App">
      <Header />
      <Main data={data}/>
      <Footer />
      </div>
    );
}
}
export default App;

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data}/>
      <Footer />
    </div>
  );
}

export default App;

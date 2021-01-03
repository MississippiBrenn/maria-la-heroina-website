import './css/App.css';
import Banner from './components/Banner.js';
import Table from './components/Table.js';
import Table2 from './components/Table2.js';
import SearchMenu from './components/SearchMenu.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchMenu />
      {/* <Table />
      <Table2 />
      <Footer />  */}
    </div>
  );
}

export default App;

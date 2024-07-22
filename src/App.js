import './App.css';
import SearchBar from './components/searchbar/searchbar';
import BusinessList from './components/businessList/businessList';

function App() {
  return (
    <div className="App">
      <h1 id="app-title">ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

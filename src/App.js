import './App.css';
import SearchBar from './components/searchbar/searchbar';
import BusinessList from './components/businessList/businessList';

function App() {

  const businesses = [{
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM4wgNQaEd_FN0VBR4rSanZDaAqoVY5S-pwc5W_=s1360-w1360-h1020',
    name: 'Newport Pizza Company',
    address: '601 Monmouth Street',
    city: 'Newport',
    state: 'KY',
    zipcode: '41071',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 123
  },

  {
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM4wgNQaEd_FN0VBR4rSanZDaAqoVY5S-pwc5W_=s1360-w1360-h1020',
    name: 'Newport Pizza Company',
    address: '601 Monmouth Street',
    city: 'Newport',
    state: 'KY',
    zipcode: '41071',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 123
  },

  {
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM4wgNQaEd_FN0VBR4rSanZDaAqoVY5S-pwc5W_=s1360-w1360-h1020',
    name: 'Newport Pizza Company',
    address: '601 Monmouth Street',
    city: 'Newport',
    state: 'KY',
    zipcode: '41071',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 123
  },

  {
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM4wgNQaEd_FN0VBR4rSanZDaAqoVY5S-pwc5W_=s1360-w1360-h1020',
    name: 'Newport Pizza Company',
    address: '601 Monmouth Street',
    city: 'Newport',
    state: 'KY',
    zipcode: '41071',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 123
  }];

  return (
    <div className="App">
      <h1 id="app-title">ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;

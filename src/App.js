import './App.css';
import Hero from './components/Hero';
import {ProductData} from './data/ProductData'

function App() {
  return (
    <div className="App">
      <Hero slides={ProductData} />
    </div>
  );
}

export default App;

import './App.css';
import Countries from './components/Countries';


import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1 className='app'> Zahra Countries Map</h1>
      <Header/>
      <Countries />
    </div>
  );
}

export default App;
